import mongoose from 'mongoose';

//"mongodb://<dbuser>:<dbpassword>@ds250607.mlab.com:38485/test-db"
console.log(process.env.PRODUCT_GALLERY_DB_URL)
const PRODUCT_GALLERY_DB_URL = process.env.PRODUCT_GALLERY_DB_URL

mongoose.connect(PRODUCT_GALLERY_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const database = mongoose.connection;
database.on("error", () => {
    console.log("> error occurred from the database");
});
database.once("open", () => {
    console.log("> successfully opened the database");
});

export default mongoose;