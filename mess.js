'use strict';

const port = 3000;
const mess = require('express')();
const http = require('http').Server(mess);
const io = require('socket.io')(http);

mess.get('/', function(req, res) {
  res.sendFile(__dirname + '/front.html')
})

io.on('connection', function(socket) {
  console.log('A user joined us...');

  socket.on('message', (msg) => {
    console.log('Message: ' + msg);
  })

  socket.on('disconnect', function() {
    console.log('A user left us:D');
  })
})

http.listen(port, function() {
  console.log('Listening on the port ' + port);
})

const spellChecker = require('spellchecker');
