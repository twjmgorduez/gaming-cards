import { Card } from "../../../src/dataaccess/entities/card"

export const insertCards = (done) => {

    const arr = [{_id: 1,name: "Card 1"},{_id: 2,name: "Card 2"},{_id: 3,name: "Card 3"},{_id: 4,name: "Card 4"}];
    Card.insertMany(arr, done);
}

export const clearCardsColletion = (done) => {
    Card.collection.deleteMany({}, done)
}