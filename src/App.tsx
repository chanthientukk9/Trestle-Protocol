import { RouterProvider } from "react-router-dom";
import routeConfigurations from "./routes/routeConfigurations";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EtherProviderContext } from "./contexts/etherProviderContext";
import useLoadEtherProvider from "./hooks/useLoadEtherProvider";

const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet],
});

const queryClient = new QueryClient();

function App() {
  const { provider: etherProvider } = useLoadEtherProvider();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">
          <EtherProviderContext.Provider value={etherProvider}>
            <RouterProvider router={routeConfigurations} />
          </EtherProviderContext.Provider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
