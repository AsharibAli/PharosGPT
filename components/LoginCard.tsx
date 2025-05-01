"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const LoginCard = () => (
  <Card className="w-full max-w-lg mb-8 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:border-2 hover:border-black bg-white flex flex-col justify-center items-center">
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-center text-black">
        PharosGPT
      </CardTitle>
      <h1 className="text-center text-gray-700">
        The First AI Blockchain Explorer for Pharos Network
      </h1>
      <CardDescription className="text-center text-gray-600">
        Connect your Wallet to access the PharosGPT
      </CardDescription>
      <CardDescription className="text-center text-gray-600">
        Make sure you are connected to Pharos Devnet
      </CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col items-center mt-4">
      <div className="[&_button]:bg-black [&_button]:text-white [&_button]:rounded-lg [&_button]:px-4 [&_button]:py-2 [&_button]:transition-all [&_button]:duration-200 [&_button]:hover:bg-gray-800">
        <ConnectButton
          chainStatus="icon"
          showBalance={false}
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
          label="Connect Wallet"
        />
      </div>
    </CardContent>
  </Card>
);

export default LoginCard;
