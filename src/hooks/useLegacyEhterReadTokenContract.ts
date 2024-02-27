import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import tokenABI from "../contracts/tokenABI.json";
import { EtherProviderContext } from "../contexts/etherProviderContext";
import { TOKEN_CONTRACT } from "../configs";

// if you want to use this, please add EtherProviderContext.Provider
// to wrap the app in App.tsx
// function App() {
//   return (
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>
//         <RainbowKitProvider modalSize="compact">
//           <ApolloProvider client={apolloClient}>
//             <RouterProvider router={routeConfigurations} />
//           </ApolloProvider>
//         </RainbowKitProvider>
//       </QueryClientProvider>
//     </WagmiProvider>
//   );
// }

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
