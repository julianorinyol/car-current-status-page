
var app = require('express')();
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = 3333

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

