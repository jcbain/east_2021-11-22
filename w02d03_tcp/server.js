const net = require("net");
const { generateRandomEmoji, generateRandomId } = require("./helpers");
const port = 4567;

const writeBack = (data, socket) => {
  socket.write(`\t🦜: ${data}`)
}

const writeToAll = (data, socket, listOfClients) => {
  for(const client of listOfClients) {
    if(socket.id !== client.id){
      
      client.write(`\t${socket.avatar} ${socket.id}: ${data}`);
    }
  }
}

const listOfClients = [];

// start an instance of a tcp server
const server = net.createServer();

server.on('connection', (socket) => {

  // console.log(socket);
  socket.setEncoding('utf8');

  socket.id = generateRandomId();
  socket.avatar = generateRandomEmoji();

  listOfClients.push(socket);

  console.log(`${socket.avatar} ${socket.id} is connected to the server`);
  // writing data to the client
  socket.write('🦜 welcome to the chat server\n');
  socket.write(`your avatar is ${socket.avatar} and id is ${socket.id}\n`)

  // listening for the client to send data
  socket.on('data', (data) => {
    console.log(`${socket.avatar} ${socket.id}: ${data}`);
    // writeBack(data, socket);'
    writeToAll(data, socket, listOfClients);
  })

})

// have server running on a specified port
// and listening for connections
server.listen(port, () => {
  console.log(`🦜 server is listening on port ${port}`);
})