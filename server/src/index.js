import express from 'express';
import connectDB from './config/dbConfig.js';
import apiRouter from './routes/apiRouter.js';
import { Server } from 'socket.io';
import { createServer } from 'http';
import messageHandler from './controllers/messageSocketController.js';
import joinRoom from './controllers/chatSocketController.js';

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    res.status(200).json({
        message: "pong"
    });
});

io.on('connection', (socket) => {
    messageHandler(socket, io);
    joinRoom(socket, io);
})

server.listen(3000, async () => {
    console.log("Server is running on http://localhost:3000");
    connectDB();
});