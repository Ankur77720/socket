const io = require("socket.io")();
const socketapi = {
    io: io
};


/* 

io - server - all user
socket - single user

*/


// Add your socket.io logic here!
io.on("connection", function (socket) {

    socket.on("disconnect", function () {
        console.log("A user disconnected");
    });

});
// end of socket.io logic

module.exports = socketapi;