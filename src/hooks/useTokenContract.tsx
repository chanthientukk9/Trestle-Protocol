import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import tokenABI from "../contracts/tokenABI.json";
import { EtherProviderContext } from "../contexts/etherProviderContext";
import { TOKEN_CONTRACT } from "../configs";

export default function useTokenContract() {
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const provider = useContext(EtherProviderContext);

  useEffect(() => {
    if (provider) {
      const contractInstance = new ethers.Contract(
        TOKEN_CONTRACT,
        tokenABI,
        provider
      );
      setContract(contractInstance);
    }
  }, [provider]);

  return {
    contract,
  };
}
