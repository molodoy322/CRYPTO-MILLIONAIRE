import { useEffect } from 'react';
import QuizGame from './components/QuizGame';
import { sdk } from '@farcaster/miniapp-sdk';

declare global {
  interface Window {
    ethereum?: any;
  }
}

const App = () => {
  useEffect(() => {
    (async () => {
      try {
        await sdk.actions.ready();
      } catch (e) {
        // Можно добавить логирование ошибки, если нужно
      }
    })();
  }, []);

  return (
    <div className="App">
      <div style={{ maxWidth: 448, margin: '0 auto', padding: '1.5rem 1rem' }}>
        <QuizGame />
      </div>
    </div>
  );
};

export default App; 