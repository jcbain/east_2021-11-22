const net = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin
})

const client = net.createConnection({
  host: 'localhost',
  port: 4567
});

client.setEncoding('utf8');

client.on('data', (data) => {
  console.log(data);
});

rl.on('line', (input) => {
  client.write(`${input}\n`);
});

client.on('end', () => {
  console.log('disconnected from the server');
  rl.close();
})