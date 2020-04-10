import app from '../src/index'
import supertest from 'supertest'

const request = supertest(app)

describe('Product gallery', () => { 
    it('should return all of products', (done) => {
        
        const products_expected = '["Card 1","Card 2","Card 3","Card 4"]'

        request
            .get('/show-gallery')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(products_expected, done)
    })

    it('should return Card 1 given Card 1', (done) => {
        
        const product_expected = "Card 1"

        request
            .get('/show-product/Card 1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(JSON.stringify(product_expected), done)
    })
})