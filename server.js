import express from 'express'
import bodyParser from 'body-parser'
import { Server } from 'http'

const app = express()
const server = Server(app)
const io = require('socket.io')(server)

app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.post('/hook', (req, res) => {
  //match for req.headers from db?
  io.emit('activity', req.body)
  res.status(200).end()
})

io.on('connection', function (socket) {
  socket.emit('activity', { 
    payload: 'hello there',
    component: 'Text' 
  })
})

server.listen(3000, () => console.log('listening on port 3000!'))