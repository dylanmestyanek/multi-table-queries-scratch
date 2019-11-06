const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const schemesRouter = require("./Routes/schemes-router");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.use("/api/schemes", schemesRouter);

server.get("/", (req, res) => res.send("I have no idea what I am doing."));

module.exports = server;