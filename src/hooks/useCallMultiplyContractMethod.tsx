import { MULTIPLY_CONTRACT } from "../configs";
import multiplyABI from "../contracts/multiplyABI.json";
import { useReadContract } from "wagmi";

export default function useCallMultiplyContractMethod({
  functionName,
  args,
}: {
  functionName: string;
  args?: readonly unknown[];
}) {
  const result = useReadContract({
    abi: multiplyABI,
    address: MULTIPLY_CONTRACT,
    functionName,
    args,
  });

  return {
    result,
  };
}
