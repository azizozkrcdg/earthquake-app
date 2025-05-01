import express from 'express';
import cors from 'cors';
import earthquakeRoute from './routes/earthquakeRoute.js';

const app = express();
app.use(cors());

app.use("/api", earthquakeRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})    