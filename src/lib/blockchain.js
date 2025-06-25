// Simulated blockchain implementation
class Blockchain {
  constructor() {
    this.chain = [];
    this.createGenesisBlock();
  }

  createGenesisBlock() {
    const genesisBlock = {
      index: 0,
      timestamp: Date.now(),
      data: "Genesis Block",
      previousHash: "0",
      hash: this.calculateHash(0, Date.now(), "Genesis Block", "0")
    };
    this.chain.push(genesisBlock);
  }

  calculateHash(index, timestamp, data, previousHash) {
    return CryptoJS.SHA256(index + timestamp + JSON.stringify(data) + previousHash).toString();
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(data) {
    const previousBlock = this.getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = Date.now();
    const newHash = this.calculateHash(
      newIndex,
      newTimestamp,
      data,
      previousBlock.hash
    );
    
    const newBlock = {
      index: newIndex,
      timestamp: newTimestamp,
      data,
      previousHash: previousBlock.hash,
      hash: newHash
    };
    
    this.chain.push(newBlock);
    return newBlock;
  }

  verifyChain() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];
      
      // Verify hash
      if (currentBlock.hash !== this.calculateHash(
        currentBlock.index,
        currentBlock.timestamp,
        currentBlock.data,
        currentBlock.previousHash
      )) {
        return false;
      }
      
      // Verify previous hash
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

export default Blockchain;