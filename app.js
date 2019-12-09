
var app = require('express')();
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = 3333
// io.on('connection', function(socket){
// 	console.log('a user connected');
// 	socket.broadcast.emit('hi');
// 	socket.on('chat message', function(msg){
// 		console.log('message: ' + msg);

// 	});
// });

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
  	console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


app.post('/status', function(req, res){
  res.send('ok');
  console.log(req.body)
  io.emit('status update', req.body);
});

http.listen(port, function(){
  console.log(`listening on *:${port}`);
});

