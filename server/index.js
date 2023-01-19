const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');
    setInterval(sendData(socket), 1000);
});

server.listen(4000, () => {
    console.log('listening on *:3000');
});


function sendData(socket) {
    return () => {
        socket.emit("tick", { efficiency: 3 + Math.random(), cpu: 1 + Math.random(), load: 2 + Math.random()});
    }
}