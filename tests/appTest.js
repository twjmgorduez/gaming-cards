import { expect } from 'chai'
import { add } from '../src/index'

describe('Adding 2 numbers', () => { 
    it('should return 3 given 1 and 2', () => {
        
        const sumExpected = 3

        const sum = add(1, 2)

        expect(sum).to.equals(sumExpected)
    })
})