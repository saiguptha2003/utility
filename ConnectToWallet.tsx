import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';

const ConnectMetamask = () => {
  const connectToWalletConnect = async () => {
    try {
      // Create a WalletConnect provider
      const provider = new WalletConnectProvider({
        rpc: {
          1: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID', // Replace with your Infura project ID
        },
      });

      // Enable the provider
      await provider.enable();

      // Initialize ethers.js with the provider
      const ethersProvider = new ethers.providers.Web3Provider(provider);

      // Get the connected account address
      const accounts = await ethersProvider.listAccounts();

      // Display the account address in the console
      console.log('Connected account address:', accounts[0]);
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={connectToWalletConnect}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Connect to Metamask</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConnectMetamask;
