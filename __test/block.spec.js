const SHA256 = require('crypto-js/sha256');
const Block = require("../src/block").Block

describe('Block', () => {
    test('validate should return false if block has been tampered', () => {
        const data = {
            text: 'random text'
        }

        const block = new Block(data)
        block.body = {
            message: 'I was here!'
        }

        return block.validate().then((isValid) => {
            expect(isValid).toEqual(false)
        })
    })

    test('getBData should return the block body decoded', () => {
        expect.assertions(1);
        const expectedData = {
            text: 'random text'
        }

        const block = new Block(expectedData)

        return block.getBData().then(result => {
            expect(result).toEqual(expectedData)
        })
    })

    test('getBData should throw when trying to read the data for the genesis block', () => {
        expect.assertions(1);
        const block = new Block({ data: 'Genesis Block' })

        return block.getBData().catch(error => {
            expect(error).toEqual({
                error: 'Data could not be retrieve!'
            })
        })
    })
})