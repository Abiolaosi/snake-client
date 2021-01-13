/*Connecting To The Server

We can add a function in the play.js to help us connect to the server.

Add a function connect which establishes a connection and returns the resulting object. */
// ------------
const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

console.log('Connecting ...');
connect(); 



// --------------------

