// establishes a connection with the game server
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.on("connect", () => {
    console.log("Connection established");
    conn.write("Name: TCP");    
  })
  // conn.on("connect", () => {
  //   let up = "Move: up";
  //   setInterval(function() {
  //     conn.write(up)}, 1000);
  // })
  
  conn.on("data", (data) => {
    // console.log('aqui');
    console.log(data);
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;