import { useAccount } from "wagmi";

export default function useCheckConnected() {
  const {isConnected, chain} = useAccount()
  
  return isConnected && !!chain;
}
