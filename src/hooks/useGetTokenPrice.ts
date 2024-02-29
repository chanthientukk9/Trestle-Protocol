import axios from "axios";
import { useEffect, useState } from "react";
import usePushError from "./usePushError";

const COINGECKO_ENDPOINT = "https://api.coingecko.com/api/v3/simple/price";
const CG_DEMO_API_KEY = "CG-mzdxLhAZmdhJ1RKi7cQhxd2i";
const TRESTLE_TOKEN_ID = "trestle";
const PRICE_CURRENCY = "usd";

export default function useGetTokenPrice() {
  const [tokenPrice, setTokenPrice] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  usePushError(error);

  useEffect(() => {
    const loadTokenPrice = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await axios.get(
          `${COINGECKO_ENDPOINT}?x_cg_demo_api_key=${CG_DEMO_API_KEY}&ids=${TRESTLE_TOKEN_ID}&vs_currencies=${PRICE_CURRENCY}`
        );
        const price = res.data?.trestle?.usd;
        setTokenPrice(price);
        setIsLoading(false);
      } catch (err: unknown) {
        setIsLoading(false);
        setError(err as Error);
      }
    };

    loadTokenPrice();
  }, []);

  return {
    tokenPrice,
    isLoading,
    error,
  };
}
