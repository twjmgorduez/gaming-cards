import expect  from 'chai'
import request from 'supertest'
import app from '../src/index'

describe('Product gallery', () => { 
    it('should return all of products', (done) => {
        
        const products_expected = "['Card 1','Card 2','Card 3']"

        request(app)
            .get('/show-gallery')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            //.expect(products_expected, done)
    })

    it('should return Card 1 given Card 1', (done) => {
        
        const product_expected = "Card 1"

        request(app)
            .get('/show-product/Card 1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            //.expect(products_expected, done)
    })
})