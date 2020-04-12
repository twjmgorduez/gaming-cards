import mongoose from "../datasources/product-gallery";
import { COLLECTION_NAME } from "../../util/constant";

const schema = {
    _id: {type: mongoose.SchemaTypes.Number, required: true},
    name: { type: mongoose.SchemaTypes.String, required: true }
};
const cardSchema = mongoose.Schema(schema)

export const Card = mongoose.model(COLLECTION_NAME, cardSchema)