// server/index.js

const express = require("express");
const app = express();
http = require("http");
const cors = require("cors");
const { Server } = require("socket.io"); // Add this

app.use(cors()); // Add cors middleware

const server = http.createServer(app); // Add this

// Add this
// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Add this
// Listen for when the client connects via socket.io-client
const CHAT_BOT = 'ChatBot';
// Add this
let chatRoom = ''; // E.g. javascript, node,...
let allUsers = []; // All users in current chat room
// Listen for when the client connects via socket.io-client
io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);
   // Save the new user to the room
   chatRoom = room;
   allUsers.push({ id: socket.id, username, room });
   chatRoomUsers = allUsers.filter((user) => user.room === room);
   socket.to(room).emit('chatroom_users', chatRoomUsers);
   socket.emit('chatroom_users', chatRoomUsers);
 });


  

  // We can write our socket event listeners in here...
  socket.on("join_room", (data) => {
    const { username, room } = data; // Data sent from client when join_room event emitted
    socket.join(room); // Join the user to a socket room
 

    let __createdtime__ = Date.now(); // Current timestamp
  // Send welcome msg to user that just joined chat only
  socket.emit('receive_message', {
    message: `Bienvenido ${username}`,
    username: CHAT_BOT,
    __createdtime__,
  });
});

console.log("Listen to")




server.listen(4000, () => "Server is running on port 3000");
