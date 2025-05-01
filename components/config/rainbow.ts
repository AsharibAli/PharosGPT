"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { Chain } from "wagmi/chains";
import { QueryClient } from "@tanstack/react-query";

export const Pharos = {
  id: 1,
  name: "Pharos Devnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    public: { http: ["https://devnet.dplabs-internal.com"] },
    default: { http: ["https://devnet.dplabs-internal.com"] },
  },
  blockExplorers: {
    default: { name: "Pharos devnet explorer", url: "https://pharosscan.xyz/" },
  },
} as const satisfies Chain;

export const config = getDefaultConfig({
  appName: "PharosGPT",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "",
  chains: [Pharos],
  ssr: true,
});

export const queryClient = new QueryClient();
