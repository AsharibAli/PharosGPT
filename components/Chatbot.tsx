import React, { useEffect, useState } from "react";
import Script from "next/script";

const Chatbot = () => {
  return (
    <div className="w-full">
      <flowise-fullchatbot></flowise-fullchatbot>
      <Script
        src="https://cdn.jsdelivr.net/npm/flowise-embed@latest/dist/web.js"
        type="module"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Chatbot) {
            window.Chatbot.initFull({
              chatflowid: process.env.NEXT_PUBLIC_CHATFLOW_ID,
              apiHost: process.env.NEXT_PUBLIC_API_HOST,
              theme: {
                button: {
                  backgroundColor: "#0007b8",
                  size: "medium",
                  iconColor: "white",
                  dragAndDrop: true,
                },
                disclaimer: {
                  title: "➡️ PharosGPT is live on Pharos Devnet 🔥",
                  message:
                    'By using this chatbot, you agree to the <a target="_blank" href="https://PharosGPT.vercel.app/terms">Terms & Condition</a>.',
                  textColor: "black",
                  buttonColor: "#000000",
                  buttonText: "Start Chatting",
                  buttonTextColor: "white",
                  blurredBackgroundColor: "rgba(0, 0, 0, 0.4)",
                  backgroundColor: "white",
                  denyButtonText: "Cancel",
                  denyButtonBgColor: "#ef4444",
                },
                chatWindow: {
                  showTitle: true,
                  title:
                    "🤖 PharosGPT - The First AI Blockchain Explorer for Pharos Network ✨",
                  welcomeMessage:
                    "Welcome to PharosGPT! I'm here to help you analyze the complex blockchain data for community and developers, live on Pharos Devnet 👈",
                  errorMessage:
                    "Unable to retrieve data from the server. Please try again later.",
                  backgroundColor: "#ffffff",
                  fontSize: 16,
                  renderHTML: true,
                  botMessage: {
                    backgroundColor: "#f7f8ff",
                    textColor: "#000000",
                    showAvatar: true,
                    avatarSrc:
                      "https://raw.githubusercontent.com/AsharibAli/project-images/refs/heads/main/pharos-logo.jpg",
                  },
                  userMessage: {
                    backgroundColor: "#f7f8ff",
                    textColor: "#000000",
                    showAvatar: true,
                    avatarSrc:
                      "https://raw.githubusercontent.com/AsharibAli/project-images/refs/heads/main/usericon.png",
                  },
                  textInput: {
                    placeholder: "Type your question here...",
                    backgroundColor: "#ffffff",
                    textColor: "#000000",
                    sendButtonColor: "#000000",
                    maxChars: 500,
                    maxCharsWarningMessage:
                      "You exceeded the characters limit. Please input less than 500 characters.",
                    autoFocus: true,
                  },
                  feedback: {
                    color: "#000000",
                  },
                  dateTimeToggle: {
                    date: true,
                    time: true,
                  },
                  footer: {
                    textColor: "#000000",
                    text: "Build with ❤️ by",
                    company: "Asharib Ali",
                    companyLink: "https://asharib.xyz/",
                  },
                },
              },
            });
          }
        }}
      />
    </div>
  );
};

export default Chatbot;
