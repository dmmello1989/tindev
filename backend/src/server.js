const express = require("express");
const mongoose = require("mongoose");
<<<<<<< HEAD
const cors = require("cors");
const routes = require("./routes");
const server = express();

mongoose.connect("mongodb+srv://omnistack:omnistack@cluster0-mhmge.mongodb.net/tindev?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);
=======
const routes = require("./routes");
const cors = require("cors");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const connectedUsers = {};

io.on("connection", socket => {
  const { user } = socket.handshake.query;

  connectedUsers[user] = socket.id;
});

mongoose.connect("mongodb+srv://omnitindev:omnitindev@cluster0-mhmge.mongodb.net/tindev?retryWrites=true&w=majority", {
  useNewUrlParser: true
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});


app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

>>>>>>> a388ce966877eb0e28602a35284aa4323771aa3a
