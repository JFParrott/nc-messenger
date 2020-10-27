const app = require('express')();
const server = require('http').createServer(app);
const socketio = require('socket.io');
const io = socketio(server);

io.on('connect', (socket) => {
  console.log('connected');
  socket.on('chat message', (message) => {
    io.emit('chat message', message);
  });

  // socket.on('disconnect', () => {
  //   const user = removeUser(socket.id);
  // });
});

server.listen(process.env.PORT || 4001, () =>
  console.log(`Server has started.`)
);
