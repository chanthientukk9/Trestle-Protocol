import { ethers, formatUnits } from "ethers";
import { useEffect, useState } from "react";

export default function useGetTotalSupply({
  tokenContract,
}: {
  tokenContract: ethers.Contract | null;
}) {
  const [totalSupply, setTotalSupply] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const loadTotalSupply = async () => {
      if (tokenContract) {
        try {
          setIsLoading(true);
          setError(null);
          const rawTotalSupply = await tokenContract.totalSupply();
          const convertedTotalSupply = formatUnits(rawTotalSupply, "ether");
          setTotalSupply(Number.parseInt(convertedTotalSupply, 10));
          setIsLoading(false);
        } catch (err) {
          setIsLoading(false);
          setError(err);
        }
      }
    };
    loadTotalSupply();
  }, [tokenContract]);

  return { totalSupply, isLoading, error };
}
