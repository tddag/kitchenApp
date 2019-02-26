const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const mongoose = require("mongoose");
// const cors = require("cors");
// // CORS -- Cross-Origin Resouces Sharing
// // use additional HTTP headers to tell browser to let web app
// // running at one origin (domain) have permission to access 
// // selected resouces from a server at a different origin
const Item = require("./models/item");

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

// Using Middleware
// app.use(cors())

// Create IO using server instance
const io = socketIO(server);

// Fix "origin been blocked by CORS policy"
// io.set('origins', '*:*');

// IO connection handling
io.on("connection", socket => {
    console.log("New client connected" + socket.id);

    // Get all the food items
    socket.on("initial_data", () => {
        Item.find().exec((err, items) => {
            if (!err) {
                io.sockets.emit("get_data", items);
            }
        });
    })

    // Placing the order
    // called from [FrontEnd] ./client/src/main/PlaceOrder.js
    socket.on("putOrder", order => {
        console.log(order.order);
        Item.findByIdAndUpdate(order._id, { $inc: {ordQty: order.order}})
            .then(updatedDoc => {
                // Emitting event to update the Kitchen
                // opened across the devices with the real time values
                io.sockets.emit("change_data");
            })
    })

    // disconnect fired when a client leaves the server
    socket.on("disconnect", () => {
        console.log("user disconneted");
    })
})

// Set port 
const port = process.env.PORT || 5001;

server.listen(port, () => console.log(`Server started on port ${port}`));