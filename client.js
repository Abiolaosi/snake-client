/*
const connect = function() {
  const conn = net.createConnection({
  host: '10.0.2.15',
  port: 50541
  });
  //interpret incoming data as text 
  conn.setEncoding('UTF8');
  // client request once connected.
  conn.on('connect', () => {
  console.log(`Successfully connected to game server!`);
  conn.write(`Name: SNK`);
  });
  // http response print data server
  conn.on('data', (data) => {
  console.log('Data recieved from the server: ${data}');
  //end of connection
  conn.end();
  });
*/  
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
  console.log('Successfully connected to game server.');

  // The client can now send data to the server by writing to its socket.
  client.write('Name: SNK');
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
