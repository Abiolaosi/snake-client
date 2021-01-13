/*Connecting To The Server

We can add a function in the play.js to help us connect to the server.

Add a function connect which establishes a connection and returns the resulting object. */
const { connect } = require('./client');
console.log('Connecting ...');
connect();