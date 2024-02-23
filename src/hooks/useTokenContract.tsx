import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import tokenABI from "../contracts/tokenABI.json";
import { EtherProviderContext } from "../contexts/etherProviderContext";

const TOKEN_CONTRACT = "0xdE8CD13B812BcD82218754A740b27E76ec1e86aD";

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
