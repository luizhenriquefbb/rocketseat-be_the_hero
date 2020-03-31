const express = require('express');
const cors = require('cors');
const http = require('http');

// create a server
const app = express();
const server = http.Server(app);

// handle cors origin
app.use(cors());

// body must be a json
app.use(express.json());


// import routes
app.use(require('./routes'));

server.listen(process.env.PORT || 3333);
