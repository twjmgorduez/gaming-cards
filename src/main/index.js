import express from 'express'
import router from './endpoints/routers.js'

const app = express();

app.use(router)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

export default app