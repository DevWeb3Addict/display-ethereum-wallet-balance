const { getBalance } = require('ethereum-wallet-interactor');

// Enter your Ethereum wallet address
const walletAddress = 'your_wallet_address_here';

// Function to display Ethereum wallet balance
const displayWalletBalance = async () => {
    const balance = await getBalance(walletAddress);
    console.log(`Wallet Balance: ${balance} ETH`);
};

displayWalletBalance();
