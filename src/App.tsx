import { RouterProvider } from "react-router-dom";
import routeConfigurations from "./routes/routeConfigurations";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EtherProviderContext } from "./contexts/etherProviderContext";
import useLoadEtherProvider from "./hooks/useLoadEtherProvider";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet],
});

const apolloClient = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v2-dev",
  cache: new InMemoryCache(),
});

const queryClient = new QueryClient();

function App() {
  const { provider: etherProvider } = useLoadEtherProvider();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">
          <EtherProviderContext.Provider value={etherProvider}>
            <ApolloProvider client={apolloClient}>
              <RouterProvider router={routeConfigurations} />
            </ApolloProvider>
          </EtherProviderContext.Provider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
