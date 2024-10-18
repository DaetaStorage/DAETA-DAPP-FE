"use client";

import { Inter } from "next/font/google";
import "./globals.css";

import { Provider as StoreProvider } from "react-redux";
import { store, persistor } from "@/Store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect, useState } from "react";
import setAuthToken from "@/Hooks/setAuthToken";
import { getCurrentUser } from "@/Hooks/authAPI";
import { setToken } from "@/Store/reducers/UserReducer";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { MetaMaskProvider } from "@metamask/sdk-react";

const clientId =
  process.env.OAuth_ClientID ||
  "https://114261519820-asjn9a027goc7urtqvkatbd29cdvhcjd.apps.googleusercontent.com";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [dappUrl, setDappUrl] = useState<string>("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Set Auth Token
      setAuthToken(localStorage.getItem("token"));
      store.dispatch(setToken(localStorage.getItem("token")));
      getCurrentUser();
    }

    if (typeof window !== "undefined") {
      setDappUrl(window.location.href);
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>
          DÆTA Storage | Distributed Cloud Storage and Modular AI-Native Data
        </title>
        <meta
          content="DÆTA - It's all about the data: store it securely, leverage it intelligently and fuel AI innovation."
          name="description"
        />
        <meta
          content="DÆTA - Distributed Cloud Storage and Modular AI-Native Data"
          property="og:title"
        />
        <meta
          content="DÆTA - It's all about the data: store it securely, leverage it intelligently and fuel AI innovation."
          property="og:description"
        />
        <meta content="https://daeta.xyz/daeta.jpg" property="og:image" />
        <meta
          content="DÆTA - Distributed Cloud Storage and Modular AI-Native Data"
          property="twitter:title"
        />
        <meta
          content="DÆTA - It's all about the data: store it securely, leverage it intelligently and fuel AI innovation."
          property="twitter:description"
        />
        <meta content="https://daeta.xyz/daeta.jpg" property="twitter:image" />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <link
          href="https://daeta.xyz/FAV32.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://daeta.xyz/FAV.png" rel="apple-touch-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className} style={{ color: "white" }}>
        <GoogleOAuthProvider clientId={clientId}>
          <MetaMaskProvider
            debug={false}
            sdkOptions={{
              dappMetadata: {
                name: "DAETA STORAGE",
                url: dappUrl || "",
              },
              infuraAPIKey: "926fde29afc24683966b8be2ba118393",
            }}
          >
            <StoreProvider store={store}>
              <PersistGate persistor={persistor} loading={null}>
                <div className="font-space-mono">{children}</div>
              </PersistGate>
            </StoreProvider>
          </MetaMaskProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
