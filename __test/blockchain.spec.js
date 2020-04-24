const SHA256 = require('crypto-js/sha256');
const Block = require("../src/block").Block
const Blockchain = require('../src/blockchain').Blockchain

process.on('unhandledRejection', (reason) => {
	console.log('REJECTION:', reason)
})

describe('Blockchain', () => {

    test('addBlock should store a block in the chain and return the block', async () => {
        // expect.assertions(1);
        const blockchain = new Blockchain()
        const genesisBlock = blockchain.chain[0]
        
        const message = 'new Block'
        const block = new Block({ message })
        const newBlock = await blockchain._addBlock(block)

        expect(blockchain.height).toBe(2)
        expect(block).toEqual(newBlock)
        expect(block.height).toBe(1)
        expect(block.previousBlockHash).toEqual(genesisBlock.hash)
    })

    test('requestMessageOwnershipVerification should the message to be signed', async () => {
        expect(true).toBe(false)
    })
})