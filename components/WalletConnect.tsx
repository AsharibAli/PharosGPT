import { ConnectButton } from "@rainbow-me/rainbowkit";

const WalletConnect = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        Welcome to PharosGPT
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Please connect your wallet to continue
      </p>
      <ConnectButton />
    </div>
  );
};

export default WalletConnect;
