// establishes a connection with the game server
const net = require("net");
// const ip = require('./constants.js');
// const port = require('./constants.js');
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    console.log("Connection established");
    conn.write("Name: TCP");    
  })
  
  conn.on("data", (data) => {
    // console.log('aqui');
    console.log(data);
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;