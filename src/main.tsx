import React from 'react'
import ReactDOM from 'react-dom/client'
import '@rainbow-me/rainbowkit/styles.css';

import {
    getDefaultConfig,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
} from 'wagmi/chains';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";
import {ConnectWalletButton} from "./connect-wallet-button.tsx";

const config = getDefaultConfig({
    appName: 'Test',
    projectId: '9b72a50685636a672927a06ea9e3633d',
    chains: [mainnet, polygon, optimism, arbitrum, base, zora],
    ssr: false
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
              <RainbowKitProvider>
                  <ConnectWalletButton/>
              </RainbowKitProvider>
          </QueryClientProvider>
      </WagmiProvider>
  </React.StrictMode>,
)
