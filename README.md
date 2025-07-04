# Crypto Millionaire Quiz

A Farcaster Mini App that tests your crypto knowledge in a "Who Wants to Be a Millionaire" style game.

## Features

- 15 crypto-related questions
- 4 answer options per question
- Progressive difficulty with increasing prizes
- Mobile-first responsive design
- Farcaster Frame integration
- Ready for Vercel deployment

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Farcaster Frame SDK

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment

This app is ready for deployment on Vercel. The `vercel.json` file includes:

- Farcaster Frame headers
- CSP configuration for Farcaster integration
- Proper routing for `.well-known/farcaster.json`

## Game Rules

- Answer 15 questions about crypto, blockchain, DeFi, NFTs, and Web3
- Each question has 4 options, only 1 is correct
- Correct answers advance to the next question
- Wrong answers end the game
- Complete all questions to become a Crypto Millionaire!

## Questions Topics

- Crypto slang and terminology
- Blockchain fundamentals
- DeFi protocols
- NFT concepts
- Web3 technology
- Popular crypto projects
- Trading and investment basics

## Farcaster Integration

The app includes:
- `manifest.json` for Mini App functionality
- `.well-known/farcaster.json` for Frame metadata
- Proper CSP headers for Farcaster domains
- Mobile-optimized design for Warpcast

## License

MIT 