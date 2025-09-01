git clone https://github.com/JoakimNagornoff/my-dapp
cd my-dapp

# Install dependencies

cd smart-contracts && npm install
cd ../frontend && npm install

# Set .env files

smart-contracts:
PRIVATE_KEY=your_sepolia_wallet_private_key
ALCHEMY_API_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY
frontend:
REACT_APP_CONTRACT_ADDRESS=0xYourDeployedContractAddress
REACT_APP_ALCHEMY_API_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY

# Deploy contracts (Sepolia or local)

cd ../smart-contracts
npx hardhat run scripts/deploy.js --network sepolia

# Run frontend

cd ../frontend
npm start
