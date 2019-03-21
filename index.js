const http = require('http')
const io = require('socket.io')
const opts = { port: 3000 }
const server = http.createServer((req, res) => {
  res.end('it works')
})
io(server).on('connection', socket => {
  socket.on('multiplex-statechanged', data => {
    socket.broadcast.emit(data.socketId, data)
  })
})
server.listen(opts.port)
console.log(`Multiplex running on port ${opts.port}`)