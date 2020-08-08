const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL || 'mongodb:/localhost/users', 
{
    useNewUrlParser: true,  
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

db.on('connected', () => {
    console.log(`WEE HERE @ ${db.host}:${db.port}`);
});

const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(webSocketsServerPort);
console.log('listening on port 8000');

//const wsServer = newSocketServer({httpServer: server});

//const clients = {};
//wsServer.on('request', function (request) {
//    const userId = getUser().id
//});
