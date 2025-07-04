import React, { useState } from 'react';
import QuizGame from './components/QuizGame';
import { ethers } from 'ethers';

declare global {
  interface Window {
    ethereum?: any;
  }
}

const App = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    setError(null);
    try {
      if (!window.ethereum) throw new Error('No wallet found. Please install MetaMask or another wallet.');
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      setWalletAddress(accounts[0]);
    } catch (e: any) {
      setError(e.message || 'Wallet connection failed');
    }
  };

  return (
    <div className="App">
      <div style={{ maxWidth: 448, margin: '0 auto', padding: '1.5rem 1rem' }}>
        <QuizGame walletAddress={walletAddress} connectWallet={connectWallet} />
      </div>
    </div>
  );
};

export default App; 