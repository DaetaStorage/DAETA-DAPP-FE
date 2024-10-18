import { useState } from "react";
import { Web3Provider } from "@ethersproject/providers"; // ethers.js provider
import { web3_metamask_hash } from "@/utils/web3MetaMaskHash";

export const useMetaMask = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const connectMetaMask = async () => {
    if (!window.ethereum) {
      setError("MetaMask is not installed.");
      return;
    }

    try {
      // Initialize provider with ethers.js
      const provider = new Web3Provider(window.ethereum);

      // Request account access
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0]);

      // Get the signer (the user's account)
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      // Sign the hashed message if the address is retrieved
      const hashedString = web3_metamask_hash();
      console.log("Hashed string: " + hashedString);

      const signature = await signer.signMessage(hashedString);
      console.log("Signature: " + signature);
    } catch (err) {
      setError("Error connecting to MetaMask or signing message.");
      console.error(err);
    }
  };

  return { account, connectMetaMask, error };
};
