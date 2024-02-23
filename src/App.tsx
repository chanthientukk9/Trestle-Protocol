import { RouterProvider } from "react-router-dom";
import routeConfigurations from "./routes/routeConfigurations";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { EtherProviderContext } from "./contexts/etherProviderContext";

const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet],
});

const queryClient = new QueryClient();

function App() {
  const [providerState, setProviderState] = useState<
    ethers.BrowserProvider | ethers.AbstractProvider | null
  >(null);

  useEffect(() => {
    const loadProvider = async () => {
      let provider;
      if (window.ethereum == null) {
        // If MetaMask is not installed, we use the default provider,
        // which is backed by a variety of third-party services (such
        // as INFURA). They do not have private keys installed,
        // so they only have read-only access
        console.log("MetaMask not installed; using read-only defaults");
        provider = ethers.getDefaultProvider();
      } else {
        // Connect to the MetaMask EIP-1193 object. This is a standard
        // protocol that allows Ethers access to make all read-only
        // requests through MetaMask.
        provider = new ethers.BrowserProvider(window.ethereum);
      }
      setProviderState(provider);
    };
    loadProvider();
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">
          <EtherProviderContext.Provider value={providerState}>
            <RouterProvider router={routeConfigurations} />
          </EtherProviderContext.Provider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
