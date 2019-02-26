const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const mongoose = require("mongoose");

// DB config
const db = require('./config/keys').mongoURI;

// Connect to mongoose 
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

const app = express();

// Create server instance
const server = http.createServer(app);

app.use("*", (req, res) => {
    res.send("Hello");
})

// Create IO using server instance
const io = socketIO(server);

// IO connection handling
io.on("connection", socket => {
    console.log("New client connected" + socket.id);

    // disconnect fired when a client leaves the server
    socket.on("disconnect", () => {
        console.log("user disconneted");
    })
})

// Set port 
const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Server started on port ${port}`));