import express from 'express'
import router from './endpoints/routers.js'

const app = express();

app.use(router)

app.listen(8080, () => {
    console.log("Server running on port 8080");
});

export default app