/// <reference types="vite/client" />

export {}

declare global {
  interface Window {
    onWalletConnected: (address: string) => void
  }
}
