"use client";

import React, { useState } from "react";
import Chatbot from "@/components/Chatbot";
import LoginCard from "@/components/LoginCard";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { WalletIcon } from "@/components/icons/WalletIcon";

const PharosGPT = () => {
  const { isConnected } = useAccount();
  const [showWalletInfo, setShowWalletInfo] = useState(false);

  const toggleWalletInfo = () => setShowWalletInfo(!showWalletInfo);

  if (!isConnected) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <LoginCard />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full">
        <Chatbot />
      </div>

      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          mounted,
        }) => {
          const ready = mounted;
          const connected = ready && account && chain;

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              <button
                onClick={openAccountModal}
                className="fixed top-14 right-2 bg-[#0007b8] text-white p-3 rounded-full shadow-lg hover:scale-110 hover:bg-[#000591] transition-all duration-200"
                title={account?.address || "Connect Wallet"}
              >
                <WalletIcon />
              </button>
            </div>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
};

export default PharosGPT;
