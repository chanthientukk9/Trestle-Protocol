import { RouterProvider } from "react-router-dom";
import routeConfigurations from "./routes/routeConfigurations";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ErrorContext, ErrorContextValue } from "./contexts/errorContext";
import { useState } from "react";
import { toast } from "react-toastify";

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
  const [error, setError] = useState<ErrorContextValue>();

  const handleToast = (errorMessage: string) => {
    toast(errorMessage, { type: "error" });
  };

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">
          <ApolloProvider client={apolloClient}>
            <ErrorContext.Provider
              value={{ error, setError, pushError: handleToast }}
            >
              <RouterProvider router={routeConfigurations} />
            </ErrorContext.Provider>
          </ApolloProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
