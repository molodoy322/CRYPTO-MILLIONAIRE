import { useState, useEffect } from 'react';
import QuizGame from './components/QuizGame';
import { ethers } from 'ethers';
import { sdk } from '@farcaster/miniapp-sdk';

declare global {
  interface Window {
    ethereum?: any;
  }
}

const App = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <div className="App">
      <div style={{ maxWidth: 448, margin: '0 auto', padding: '1.5rem 1rem' }}>
        <QuizGame walletAddress={walletAddress} />
      </div>
    </div>
  );
};

export default App; 