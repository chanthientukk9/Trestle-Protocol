import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import usePushError from "./usePushError";

const LIQUIDITY_QUERY = gql`
  query tokens($tokenAddress: Bytes!) {
    tokens(where: { id: $tokenAddress }) {
      derivedETH
      totalLiquidity
    }
  }
`;

const ETH_PRICE_QUERY = gql`
  query ethPrice {
    bundle(id: "1") {
      ethPrice
    }
  }
`;

export default function useGetLiquidityData() {
  const {
    loading: liquidityLoading,
    error: liquidityError,
    data: liquidityData,
  } = useQuery(LIQUIDITY_QUERY, {
    variables: {
      tokenAddress: "0xff9cb08752d3a9be72de14cce63f22fa19c24637",
    },
  });

  const {
    loading: ethPriceLoading,
    error: ethPriceError,
    data: ethPriceData,
  } = useQuery(ETH_PRICE_QUERY, {
    pollInterval: 1e3 * 2,
    nextFetchPolicy: "cache-and-network",
  });

  const [totalLiquidity, setTotalLiquidity] = useState(0);
  const [wTiaPrice, setWTiaPrice] = useState(0);

  usePushError(liquidityError || ethPriceError);

  useEffect(() => {
    if (liquidityData) {
      setTotalLiquidity(
        liquidityData?.tokens &&
          liquidityData?.tokens?.length > 0 &&
          Number(liquidityData?.tokens?.[0]?.totalLiquidity) * 2
      );
    }
  }, [liquidityData]);

  useEffect(() => {
    if (ethPriceData && liquidityData) {
      const wTiaDerivedETH =
        liquidityData.tokens &&
        liquidityData.tokens.length > 0 &&
        Number(liquidityData.tokens[0].derivedETH);
      const ethPriceValue =
        ethPriceData.bundle && Number(ethPriceData.bundle.ethPrice);
      const wTiaPrice = parseFloat(wTiaDerivedETH) * parseFloat(ethPriceValue);
      setWTiaPrice(wTiaPrice);
    }
  }, [liquidityData, ethPriceData]);

  return {
    totalLiquidity,
    wTiaPrice,
    isLoading: liquidityLoading || ethPriceLoading,
    error: liquidityError || ethPriceError,
  };
}
