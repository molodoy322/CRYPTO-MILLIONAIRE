export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  prize: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What does 'HODL' mean in crypto slang?",
    options: [
      "Hold On for Dear Life",
      "Have Only Diamond Hands",
      "Hold",
      "High On Digital Life"
    ],
    correctAnswer: 0,
    prize: "$100"
  },
  {
    id: 2,
    question: "Which cryptocurrency was created by Satoshi Nakamoto?",
    options: [
      "Ethereum",
      "Bitcoin",
      "Litecoin",
      "Dogecoin"
    ],
    correctAnswer: 1,
    prize: "$200"
  },
  {
    id: 3,
    question: "What is a 'smart contract'?",
    options: [
      "A legal document for crypto trading",
      "Self-executing code on blockchain",
      "A crypto wallet feature",
      "A mining algorithm"
    ],
    correctAnswer: 1,
    prize: "$300"
  },
  {
    id: 4,
    question: "What does 'DeFi' stand for?",
    options: [
      "Digital Finance",
      "Decentralized Finance",
      "Definite Finance",
      "Direct Finance"
    ],
    correctAnswer: 1,
    prize: "$500"
  },
  {
    id: 5,
    question: "Which blockchain platform is known for its smart contracts?",
    options: [
      "Bitcoin",
      "Ethereum",
      "Litecoin",
      "Ripple"
    ],
    correctAnswer: 1,
    prize: "$1,000"
  },
  {
    id: 6,
    question: "What is an NFT?",
    options: [
      "New Financial Token",
      "Non-Fungible Token",
      "Network File Transfer",
      "Next Future Technology"
    ],
    correctAnswer: 1,
    prize: "$2,000"
  },
  {
    id: 7,
    question: "What is 'yield farming' in DeFi?",
    options: [
      "Growing crypto plants",
      "Earning rewards by providing liquidity",
      "Mining cryptocurrency",
      "Trading futures"
    ],
    correctAnswer: 1,
    prize: "$4,000"
  },
  {
    id: 8,
    question: "Which consensus mechanism does Bitcoin use?",
    options: [
      "Proof of Stake",
      "Proof of Work",
      "Proof of Authority",
      "Proof of Space"
    ],
    correctAnswer: 1,
    prize: "$8,000"
  },
  {
    id: 9,
    question: "What is a 'whale' in crypto?",
    options: [
      "A large sea animal",
      "Someone with large crypto holdings",
      "A mining rig",
      "A blockchain node"
    ],
    correctAnswer: 1,
    prize: "$16,000"
  },
  {
    id: 10,
    question: "What does 'DYOR' mean?",
    options: [
      "Do Your Own Research",
      "Don't Yield On Returns",
      "Digital Year Over Revenue",
      "Decentralized Yield Options"
    ],
    correctAnswer: 0,
    prize: "$32,000"
  },
  {
    id: 11,
    question: "Which protocol is known for automated market making?",
    options: [
      "Uniswap",
      "Bitcoin",
      "Ethereum",
      "Chainlink"
    ],
    correctAnswer: 0,
    prize: "$64,000"
  },
  {
    id: 12,
    question: "What is 'gas' in Ethereum?",
    options: [
      "A type of fuel",
      "Transaction fees",
      "A mining reward",
      "A token standard"
    ],
    correctAnswer: 1,
    prize: "$125,000"
  },
  {
    id: 13,
    question: "What is 'staking' in crypto?",
    options: [
      "Gambling with crypto",
      "Locking crypto to earn rewards",
      "Trading on margin",
      "Mining cryptocurrency"
    ],
    correctAnswer: 1,
    prize: "$250,000"
  },
  {
    id: 14,
    question: "Which company created the Lightning Network?",
    options: [
      "Ethereum Foundation",
      "Bitcoin developers",
      "Binance",
      "Coinbase"
    ],
    correctAnswer: 1,
    prize: "$500,000"
  },
  {
    id: 15,
    question: "What is 'Web3'?",
    options: [
      "The third version of the internet",
      "A decentralized internet built on blockchain",
      "A social media platform",
      "A crypto exchange"
    ],
    correctAnswer: 1,
    prize: "$1,000,000"
  }
]; 