// const connect = function() {
//   const conn = net.createConnection({
//     host: '10.0.2.15',
//     port: 50541
//   });

//   // interpret incoming data as text
//   conn.setEncoding('utf8');

//   conn.on('connect', () => {
//     console.log('Successfully connected to game server');
//   });
  
//   conn.on('connect', () => {
//     conn.write('Name: MHR');

//   });

//   conn.on('data', (data) => {
//     console.log(`Data received from the server:  ${data}`);
//   });

//   return conn;
// };
// ---------------------------

const Net = require('net');
// The port number and hostname of the server.
const port = 50541;
const host = '10.0.2.15';

// Create a new TCP client.
const client = new Net.Socket();
// Send a connection request to the server.
client.connect({ port: port, host: host }), function() {
  // If there is no error, the server has accepted the request and created a new
  // socket dedicated to us.
  console.log('TCP connection established with the server.');

  // The client can now send data to the server by writing to its socket.
  client.write('Hello, server.');
};

// The client can also receive data from the server by reading from its socket.
client.on('data', function(chunk) {
  console.log(`Data received from the server: ${chunk.toString()}.`);
    
  // Request an end to the connection after the data has been received.
  client.end();
});

client.on('end', function() {
  console.log('Requested an end to the TCP connection');
});
