import { formatEther } from "ethers";
import useReadTokenContract from "./useReadTokenContract";

export default function useGetTotalSupply() {
  const { result } = useReadTokenContract({
    functionName: "totalSupply",
  });

  return {
    totalSupply: Number(formatEther(`${result.data || 0}`)),
    isLoading: result.isLoading,
  };
}
