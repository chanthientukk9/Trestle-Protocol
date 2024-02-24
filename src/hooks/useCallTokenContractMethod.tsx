import tokenABI from "../contracts/tokenABI.json";
import { useReadContract } from "wagmi";

const TOKEN_CONTRACT = "0xdE8CD13B812BcD82218754A740b27E76ec1e86aD";

export default function useCallTokenContractMethod({
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
