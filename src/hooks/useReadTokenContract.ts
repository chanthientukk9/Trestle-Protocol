import { TOKEN_CONTRACT } from "../configs";
import tokenABI from "../contracts/tokenABI.json";
import { useReadContract } from "wagmi";

export default function useReadTokenContract({
  functionName,
  args
}: {
  functionName: string;
  args?: readonly unknown[];
}) {
  const result = useReadContract({
    abi: tokenABI,
    address: TOKEN_CONTRACT,
    functionName,
    args
  });

  return {
    result,
  };
}
