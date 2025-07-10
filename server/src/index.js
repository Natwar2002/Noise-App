import express from 'express';
import connectDB from './config/dbConfig.js';
import apiRouter from './routes/apiRouter.js';

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    res.status(200).json({
        message: "pong"
    });
});

app.listen(3000, async () => {
    console.log("Server is running on http://localhost:3000");
    connectDB();
});