export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  prize: string;
}

export const easyQuestions: Question[] = [
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
      "Litecoin",
      "Dogecoin",
      "Bitcoin"
    ],
    correctAnswer: 3,
    prize: "$200"
  },
  {
    id: 3,
    question: "What is a 'smart contract'?",
    options: [
      "A legal document for crypto trading",
      "A crypto wallet feature",
      "Self-executing code on blockchain",
      "A mining algorithm"
    ],
    correctAnswer: 2,
    prize: "$300"
  },
  {
    id: 4,
    question: "What does 'DeFi' stand for?",
    options: [
      "Definite Finance",
      "Decentralized Finance",
      "Digital Finance",
      "Direct Finance"
    ],
    correctAnswer: 1,
    prize: "$500"
  },
  {
    id: 5,
    question: "Which blockchain platform is known for its smart contracts?",
    options: [
      "Ethereum",
      "Bitcoin",
      "Litecoin",
      "Ripple"
    ],
    correctAnswer: 0,
    prize: "$1,000"
  },
  {
    id: 6,
    question: "What is an NFT?",
    options: [
      "Network File Transfer",
      "Non-Fungible Token",
      "New Financial Token",
      "Next Future Technology"
    ],
    correctAnswer: 1,
    prize: "$2,000"
  },
  {
    id: 7,
    question: "What is 'yield farming' in DeFi?",
    options: [
      "Earning rewards by providing liquidity",
      "Growing crypto plants",
      "Mining cryptocurrency",
      "Trading futures"
    ],
    correctAnswer: 0,
    prize: "$4,000"
  },
  {
    id: 8,
    question: "Which consensus mechanism does Bitcoin use?",
    options: [
      "Proof of Stake",
      "Proof of Authority",
      "Proof of Work",
      "Proof of Space"
    ],
    correctAnswer: 2,
    prize: "$8,000"
  },
  {
    id: 9,
    question: "What is a 'whale' in crypto?",
    options: [
      "A mining rig",
      "A blockchain node",
      "A large sea animal",
      "Someone with large crypto holdings"
    ],
    correctAnswer: 3,
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
      "Bitcoin",
      "Uniswap",
      "Ethereum",
      "Chainlink"
    ],
    correctAnswer: 1,
    prize: "$64,000"
  },
  {
    id: 12,
    question: "What is 'gas' in Ethereum?",
    options: [
      "A mining reward",
      "A type of fuel",
      "Transaction fees",
      "A token standard"
    ],
    correctAnswer: 2,
    prize: "$125,000"
  },
  {
    id: 13,
    question: "What is 'staking' in crypto?",
    options: [
      "Locking crypto to earn rewards",
      "Gambling with crypto",
      "Trading on margin",
      "Mining cryptocurrency"
    ],
    correctAnswer: 0,
    prize: "$250,000"
  },
  {
    id: 14,
    question: "Which company created the Lightning Network?",
    options: [
      "Binance",
      "Ethereum Foundation",
      "Bitcoin developers",
      "Coinbase"
    ],
    correctAnswer: 2,
    prize: "$500,000"
  },
  {
    id: 15,
    question: "What is 'Web3'?",
    options: [
      "A decentralized internet built on blockchain",
      "A crypto exchange",
      "A social media platform",
      "The third version of the internet"
    ],
    correctAnswer: 0,
    prize: "$1,000,000"
  }
];

export const mediumQuestions: Question[] = [
  {
    id: 1,
    question: "Which protocol is the backbone of most DeFi apps?",
    options: [
      "Uniswap",
      "Ethereum",
      "Solana",
      "Polygon"
    ],
    correctAnswer: 1,
    prize: "$100"
  },
  {
    id: 2,
    question: "What is a 'drop' in the context of NFTs?",
    options: [
      "A sudden price fall",
      "A new NFT collection release",
      "A failed transaction",
      "Airdrop of tokens"
    ],
    correctAnswer: 1,
    prize: "$200"
  },
  {
    id: 3,
    question: "Which project is NOT an NFT marketplace?",
    options: [
      "OpenSea",
      "Blur",
      "Uniswap",
      "Zora"
    ],
    correctAnswer: 2,
    prize: "$300"
  },
  {
    id: 4,
    question: "What is Farcaster?",
    options: [
      "A DeFi protocol",
      "A decentralized social network",
      "A crypto wallet",
      "A Layer 2 blockchain"
    ],
    correctAnswer: 1,
    prize: "$500"
  },
  {
    id: 5,
    question: "Which chain is most used for NFT drops in 2024?",
    options: [
      "Polygon",
      "Ethereum",
      "Base",
      "Solana"
    ],
    correctAnswer: 2,
    prize: "$1,000"
  },
  {
    id: 6,
    question: "What is a 'Frame' in Farcaster?",
    options: [
      "A smart contract",
      "A mini-app inside a cast",
      "A wallet extension",
      "A token standard"
    ],
    correctAnswer: 1,
    prize: "$2,000"
  },
  {
    id: 7,
    question: "Which protocol is used for cross-chain swaps?",
    options: [
      "Uniswap",
      "Hop Protocol",
      "Aave",
      "Zora"
    ],
    correctAnswer: 1,
    prize: "$4,000"
  },
  {
    id: 8,
    question: "What is the main utility of $DEGEN token?",
    options: [
      "Governance",
      "Gas on Base",
      "Tipping and rewards in Farcaster",
      "NFT minting"
    ],
    correctAnswer: 2,
    prize: "$8,000"
  },
  {
    id: 9,
    question: "Which project is a Layer 2 for Ethereum?",
    options: [
      "Base",
      "Solana",
      "Zora",
      "Blur"
    ],
    correctAnswer: 0,
    prize: "$16,000"
  },
  {
    id: 10,
    question: "What is a 'mint' in NFT context?",
    options: [
      "Creating a new NFT",
      "Selling an NFT",
      "Burning an NFT",
      "Listing on OpenSea"
    ],
    correctAnswer: 0,
    prize: "$32,000"
  },
  {
    id: 11,
    question: "Which protocol is used for lending and borrowing?",
    options: [
      "Aave",
      "Uniswap",
      "Zora",
      "Farcaster"
    ],
    correctAnswer: 0,
    prize: "$64,000"
  },
  {
    id: 12,
    question: "What is a 'cast' on Farcaster?",
    options: [
      "A transaction",
      "A post/message",
      "A token",
      "A smart contract"
    ],
    correctAnswer: 1,
    prize: "$125,000"
  },
  {
    id: 13,
    question: "Which NFT project is famous for pixel art punks?",
    options: [
      "Bored Ape Yacht Club",
      "CryptoPunks",
      "Azuki",
      "Milady"
    ],
    correctAnswer: 1,
    prize: "$250,000"
  },
  {
    id: 14,
    question: "What is the main use of $FAR token?",
    options: [
      "Governance in Farcaster",
      "Gas on Ethereum",
      "NFT minting",
      "Staking"
    ],
    correctAnswer: 0,
    prize: "$500,000"
  },
  {
    id: 15,
    question: "Which protocol is used for perpetual trading?",
    options: [
      "Uniswap",
      "dYdX",
      "Aave",
      "Zora"
    ],
    correctAnswer: 1,
    prize: "$1,000,000"
  }
];

export const hardQuestions: Question[] = [
  {
    id: 1,
    question: "Which EVM opcode is used to get the current block number?",
    options: [
      "BLOCKNUM",
      "NUMBER",
      "BLOCKNUMBER",
      "BLOCK"
    ],
    correctAnswer: 1,
    prize: "$100"
  },
  {
    id: 2,
    question: "What is MEV in crypto trading?",
    options: [
      "Maximum Extractable Value",
      "Minimum Exchange Volume",
      "Market Execution Value",
      "Multi-chain Event Validation"
    ],
    correctAnswer: 0,
    prize: "$200"
  },
  {
    id: 3,
    question: "Which protocol pioneered flash loans?",
    options: [
      "Aave",
      "Uniswap",
      "Compound",
      "Balancer"
    ],
    correctAnswer: 0,
    prize: "$300"
  },
  {
    id: 4,
    question: "What is the main function of a relayer in cross-chain bridges?",
    options: [
      "Provide liquidity",
      "Validate transactions",
      "Relay messages between chains",
      "Mint NFTs"
    ],
    correctAnswer: 2,
    prize: "$500"
  },
  {
    id: 5,
    question: "Which protocol is NOT a DEX aggregator?",
    options: [
      "1inch",
      "Matcha",
      "Curve",
      "Paraswap"
    ],
    correctAnswer: 2,
    prize: "$1,000"
  },
  {
    id: 6,
    question: "What is the main use of the OP Stack?",
    options: [
      "NFT minting",
      "Building Layer 2 chains",
      "Staking",
      "Bridging assets"
    ],
    correctAnswer: 1,
    prize: "$2,000"
  },
  {
    id: 7,
    question: "Which Farcaster client is known for Frames and advanced features?",
    options: [
      "Warpcast",
      "Supercast",
      "Farcaster CLI",
      "DegenBot"
    ],
    correctAnswer: 1,
    prize: "$4,000"
  },
  {
    id: 8,
    question: "What is a 'reorg' in blockchain?",
    options: [
      "A new NFT drop",
      "A chain reorganization event",
      "A DeFi exploit",
      "A Farcaster cast"
    ],
    correctAnswer: 1,
    prize: "$8,000"
  },
  {
    id: 9,
    question: "Which protocol is used for intent-based trading?",
    options: [
      "CowSwap",
      "Uniswap",
      "Aave",
      "Blur"
    ],
    correctAnswer: 0,
    prize: "$16,000"
  },
  {
    id: 10,
    question: "What is the main function of EigenLayer?",
    options: [
      "Restaking",
      "NFT minting",
      "Perpetual trading",
      "Gasless transactions"
    ],
    correctAnswer: 0,
    prize: "$32,000"
  },
  {
    id: 11,
    question: "Which protocol is used for on-chain options trading?",
    options: [
      "Lyra",
      "Uniswap",
      "Aave",
      "Zora"
    ],
    correctAnswer: 0,
    prize: "$64,000"
  },
  {
    id: 12,
    question: "What is the main use of $DEGEN on Farcaster?",
    options: [
      "Gas fees",
      "Governance",
      "Tipping and rewards",
      "NFT minting"
    ],
    correctAnswer: 2,
    prize: "$125,000"
  },
  {
    id: 13,
    question: "Which protocol is used for on-chain perpetuals on Base?",
    options: [
      "dYdX",
      "Aevo",
      "UniswapX",
      "Balancer"
    ],
    correctAnswer: 1,
    prize: "$250,000"
  },
  {
    id: 14,
    question: "What is a 'Frame' in Farcaster?",
    options: [
      "A mini-app inside a cast",
      "A token standard",
      "A governance proposal",
      "A Layer 2 chain"
    ],
    correctAnswer: 0,
    prize: "$500,000"
  },
  {
    id: 15,
    question: "Which protocol is used for NFT fractionalization?",
    options: [
      "Uniswap",
      "Fractional.art",
      "Aave",
      "Zora"
    ],
    correctAnswer: 1,
    prize: "$1,000,000"
  }
]; 