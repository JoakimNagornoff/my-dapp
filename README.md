git clone https://github.com/JoakimNagornoff/my-dapp
cd my-dapp

# Install dependencies

cd smart-contracts && npm install
cd ../frontend && npm install

# Set .env files

# Deploy contracts (Sepolia or local)

cd ../smart-contracts
npx hardhat run scripts/deploy.js --network sepolia

# Run frontend

cd ../frontend
npm start
