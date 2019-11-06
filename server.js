const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const schemesRouter = require("./Routes/schemes-router");
const stepsRouter = require("./Routes/steps-router");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.use("/api/schemes", schemesRouter);
server.use("/api/steps", stepsRouter);

server.get("/", (req, res) => res.send("I have no idea what I am doing."));

module.exports = server;