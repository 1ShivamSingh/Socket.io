const express = require('express');
const app = express(); // creates an instance of express
const http = require('http'); 
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require('path');
//var port_number = server.listen(process.env.PORT || 3000);
//app.listen(port_number);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(process.env.PORT || 5000){
  console.log('listening to the port')
};
// listen(3000, () => {
//   console.log('listening on *:3000');
// });
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});