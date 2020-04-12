import { Card } from "../../../src/dataaccess/entities/card"

export const insertCards = () => {

    Card.create({
        _id: 1,
        name: "Card 1"
    })

    Card.create({
        _id: 2,
        name: "Card 2"
    })

    Card.create({
        _id: 3,
        name: "Card 3"
    })

    Card.create({
        _id: 4,
        name: "Card 4"
    })
}

export const clearCardsColletion = () => {
    Card.collection.deleteMany({})
}