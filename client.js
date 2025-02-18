// establishes a connection with the game server
const net = require("net");
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
    console.log(data);
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;