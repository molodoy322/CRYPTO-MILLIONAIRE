// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CryptoMillionaireQuiz is ERC721URIStorage, Ownable {
    uint256 public constant ANSWER_FEE = 0.00002 ether;
    uint256 public constant MINT_FEE = 0.0002 ether;
    uint8 public constant QUESTIONS_COUNT = 15;

    enum Difficulty { Easy, Medium, Hard }

    struct Progress {
        uint8 correctAnswers;
        bool completed;
        bool nftMinted;
        Difficulty level;
    }

    mapping(address => Progress) public userProgress;
    uint256 public nextTokenId = 1;

    mapping(Difficulty => string) public difficultyURIs;

    event AnswerPaid(address indexed user, uint8 answerNumber, Difficulty level);
    event NFTMinted(address indexed user, uint256 tokenId, Difficulty level);

    constructor(
        string memory easyURI,
        string memory mediumURI,
        string memory hardURI
    ) ERC721("CryptoMillionaireQuiz", "CMQ") Ownable(msg.sender) {
        difficultyURIs[Difficulty.Easy] = easyURI;
        difficultyURIs[Difficulty.Medium] = mediumURI;
        difficultyURIs[Difficulty.Hard] = hardURI;
    }

    function payForAnswer(Difficulty level) external payable {
        require(msg.value == ANSWER_FEE, "Incorrect fee");
        Progress storage progress = userProgress[msg.sender];
        require(!progress.completed, "Quiz already completed");
        if (progress.correctAnswers == 0) {
            progress.level = level;
        } else {
            require(progress.level == level, "Cannot change level mid-quiz");
        }
        progress.correctAnswers += 1;
        if (progress.correctAnswers >= QUESTIONS_COUNT) {
            progress.completed = true;
        }
        emit AnswerPaid(msg.sender, progress.correctAnswers, level);
    }

    function mintNFT() external payable {
        Progress storage progress = userProgress[msg.sender];
        require(progress.completed, "Quiz not completed");
        require(!progress.nftMinted, "NFT already minted");
        require(msg.value == MINT_FEE, "Incorrect mint fee");

        uint256 tokenId = nextTokenId++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, difficultyURIs[progress.level]);
        progress.nftMinted = true;

        emit NFTMinted(msg.sender, tokenId, progress.level);
    }

    // Вывод средств для владельца деплоя
    function withdrawToOwner() external onlyOwner {
        (bool sent, ) = owner().call{value: address(this).balance}("");
        require(sent, "Withdraw failed");
    }

    // Owner can update URIs if needed
    function setDifficultyURI(Difficulty level, string calldata uri) external onlyOwner {
        difficultyURIs[level] = uri;
    }
} 