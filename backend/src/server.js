const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const server = express();

//33MIN
mongoose.connect("mongodb+srv://omnistack:omnistack@cluster0-mhmge.mongodb.net/tindev?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(express.json());
server.use(routes);
server.listen(3333);