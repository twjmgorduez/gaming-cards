import express from 'express'
import router from '../src/endpoints/routers.js'

const app = express();

app.use(router)

app.listen(3001, () => {
    console.log("Server running on port 3000");
});

export default app