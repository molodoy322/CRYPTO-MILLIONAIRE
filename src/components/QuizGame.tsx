import React, { useState, useCallback, useMemo } from 'react';
import { easyQuestions, mediumQuestions, hardQuestions } from '../data/questions.ts';
import { ethers } from 'ethers';
import { getContract } from '../contract';
// import { ethers } from 'ethers';
// import { getContract } from '../contract';

declare global {
  interface Window {
    ethereum?: any;
  }
}

interface QuizGameProps {
  walletAddress: string | null;
}

type GameState = 'select' | 'start' | 'playing' | 'won' | 'lost';
type Difficulty = 'easy' | 'medium' | 'hard';

const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
};

const DIFFICULTY_DESCRIPTIONS: Record<Difficulty, string> = {
  easy: 'Basic crypto, blockchain, and NFT questions.',
  medium: 'DeFi, drops, Farcaster, top projects, and more.',
  hard: 'Advanced trading, protocols, Farcaster ecosystem, and Web3 tech.',
};

const QuizGame: React.FC<QuizGameProps> = ({ walletAddress }) => {
  const [gameState, setGameState] = useState<GameState>('select');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [txStatus, setTxStatus] = useState<string | null>(null);

  const questions = useMemo(() => {
    if (difficulty === 'easy') return easyQuestions;
    if (difficulty === 'medium') return mediumQuestions;
    return hardQuestions;
  }, [difficulty]);

  const currentQuestion = useMemo(() => questions[currentQuestionIndex], [questions, currentQuestionIndex]);

  const handleSelectDifficulty = (level: Difficulty) => {
    setDifficulty(level);
    setGameState('start');
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleStartGame = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setGameState('playing');
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setShowResult(false);
      setIsAnimating(false);
    }, 200);
  }, []);

  const handleAnswerSelect = useCallback(async (answerIndex: number) => {
    if (selectedAnswer !== null || isAnimating) return;
    setIsAnimating(true);
    setSelectedAnswer(answerIndex);
    const correct = answerIndex === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      try {
        setTxStatus('Отправка транзакции...');
        if (window.ethereum && walletAddress) {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const contract = getContract(signer);
          // Укажи нужную сумму value, если требуется (например, 0.01 ETH)
          const tx = await contract.payForAnswer(difficulty, { value: ethers.parseEther('0.01') });
          setTxStatus('Ожидание подтверждения...');
          await tx.wait();
          setTxStatus('Транзакция подтверждена!');
        } else {
          setTxStatus('Кошелёк не подключён!');
        }
      } catch (e: any) {
        setTxStatus('Ошибка транзакции: ' + (e?.message || e));
      }
    }

    setTimeout(() => {
      if (correct) {
        if (currentQuestionIndex === questions.length - 1) {
          setGameState('won');
        } else {
          setCurrentQuestionIndex(prev => prev + 1);
          setSelectedAnswer(null);
          setShowResult(false);
        }
      } else {
        setGameState('lost');
      }
      setIsAnimating(false);
      setTxStatus(null);
    }, 1500);
  }, [selectedAnswer, isAnimating, currentQuestion.correctAnswer, currentQuestionIndex, questions.length, difficulty, walletAddress]);

  const handleRestart = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setGameState('select');
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setShowResult(false);
      setIsAnimating(false);
    }, 200);
  }, []);

  const getAnswerClass = useCallback((answerIndex: number) => {
    if (!showResult) return 'answer-button';
    
    if (answerIndex === currentQuestion.correctAnswer) {
      return 'answer-button correct';
    }
    
    if (answerIndex === selectedAnswer && !isCorrect) {
      return 'answer-button incorrect';
    }
    
    return 'answer-button disabled';
  }, [showResult, currentQuestion.correctAnswer, selectedAnswer, isCorrect]);

  const renderSelectDifficulty = () => (
    <div className="mobile-container">
      <div className="glass-card slide-in">
        <div className="floating-emoji">🧠</div>
        <h1 className="millionaire-title">CRYPTO MILLIONAIRE</h1>
        <p className="text-white/80 text-lg mb-6 leading-relaxed">
          <span className="block mb-2">Pick your challenge and prove you're a true crypto native!</span>
          <span className="block text-millionaire-gold font-bold">New questions every 5 days — stay sharp, stay ahead.</span>
        </p>
        <div className="space-y-4 mb-6">
          {(['easy', 'medium', 'hard'] as Difficulty[]).map((level) => (
            <button
              key={level}
              className={`quiz-button font-black text-xl ${difficulty === level ? 'ring-2 ring-millionaire-gold' : ''}`}
              onClick={() => handleSelectDifficulty(level)}
              style={{ background: level === 'easy' ? 'linear-gradient(90deg,#10B981,#3b82f6)' : level === 'medium' ? 'linear-gradient(90deg,#f59e42,#fbbf24)' : 'linear-gradient(90deg,#ef4444,#8b5cf6)' }}
            >
              {DIFFICULTY_LABELS[level]}
              <span className="block text-sm font-normal mt-1 opacity-80">{DIFFICULTY_DESCRIPTIONS[level]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStartScreen = () => (
    <div className="mobile-container">
      <div className={`glass-card slide-in ${isAnimating ? 'fade-in' : ''}`}>
        <div className="floating-emoji">💰</div>
        <h1 className="millionaire-title">CRYPTO MILLIONAIRE</h1>
        <p className="text-white/80 text-lg mb-6 leading-relaxed">
          Test your crypto knowledge and become a millionaire!
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-white/70">15 questions</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-2xl mr-3">💎</span>
            <span className="text-white/70">4 options each</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-2xl mr-3">🏆</span>
            <span className="text-white/70">Only 1 correct answer</span>
          </div>
        </div>
        <button
          onClick={handleStartGame}
          className="quiz-button font-black text-xl"
          disabled={isAnimating}
        >
          🚀 START QUIZ 🚀
        </button>
      </div>
    </div>
  );

  const renderQuestion = () => (
    <div className="mobile-container">
      <div className={`glass-card p-6 slide-in ${isAnimating ? 'fade-in' : ''}`}>
        {/* Progress and Prize */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-white/80 font-bold text-lg">
            Question {currentQuestion.id}/15
          </div>
          <div className="prize-display">
            {currentQuestion.prize}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${(currentQuestion.id / 15) * 100}%` }}
          ></div>
        </div>

        {/* Question */}
        <h2 className="question-text">
          {currentQuestion.question}
        </h2>

        {/* Answers */}
        <div>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null || isAnimating}
              className={`${getAnswerClass(index)}`}
            >
              <span className="font-bold mr-3 text-2xl">
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </button>
          ))}
        </div>

        {/* Result Message */}
        {showResult && (
          <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
            <div className="floating-emoji">
              {isCorrect ? '🎉' : '💥'}
            </div>
            <div className="font-black text-xl">
              {isCorrect ? 'CORRECT!' : 'WRONG!'}
            </div>
            <div className="text-sm opacity-80">
              {isCorrect ? 'Moving to next question...' : 'Game Over!'}
            </div>
          </div>
        )}

        {txStatus && <div className="result-message">{txStatus}</div>}
      </div>
    </div>
  );

  const renderWinScreen = () => (
    <div className="mobile-container">
      <div className={`glass-card slide-in ${isAnimating ? 'fade-in' : ''}`}>
        <div className="floating-emoji">🎉</div>
        <h1 className="millionaire-title text-4xl">
          YOU ARE A CRYPTO MILLIONAIRE!
        </h1>
        <div className="prize-display text-3xl mb-6">
          $1,000,000
        </div>
        <p className="text-white/80 text-lg mb-8">
          Congratulations! You've answered all 15 questions correctly!
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <span className="text-2xl mr-3">🏆</span>
            <span className="text-white/70">Perfect Score!</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-2xl mr-3">💎</span>
            <span className="text-white/70">Crypto Expert!</span>
          </div>
        </div>
        <button
          onClick={handleRestart}
          className="quiz-button font-black text-xl"
          disabled={isAnimating}
        >
          🎮 PLAY AGAIN 🎮
        </button>
      </div>
    </div>
  );

  const renderLoseScreen = () => (
    <div className="mobile-container">
      <div className={`glass-card slide-in ${isAnimating ? 'fade-in' : ''}`}>
        <div className="floating-emoji">💥</div>
        <h1 className="millionaire-title text-4xl text-red-400">
          YOU FAILED!
        </h1>
        <p className="text-white/80 text-xl mb-6">
          Better luck next time!
        </p>
        <div className="prize-display text-2xl mb-6">
          {questions[currentQuestionIndex - 1]?.prize || '$0'}
        </div>
        <p className="text-white/60 text-lg mb-8">
          You made it to question {currentQuestion.id}
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <span className="text-2xl mr-3">📚</span>
            <span className="text-white/70">Study more crypto!</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-2xl mr-3">🔄</span>
            <span className="text-white/70">Try again!</span>
          </div>
        </div>
        <button
          onClick={handleRestart}
          className="quiz-button font-black text-xl"
          disabled={isAnimating}
        >
          🔄 TRY AGAIN 🔄
        </button>
      </div>
    </div>
  );

  switch (gameState) {
    case 'select':
      return renderSelectDifficulty();
    case 'start':
      return renderStartScreen();
    case 'playing':
      return renderQuestion();
    case 'won':
      return renderWinScreen();
    case 'lost':
      return renderLoseScreen();
    default:
      return renderSelectDifficulty();
  }
};

export default QuizGame; 