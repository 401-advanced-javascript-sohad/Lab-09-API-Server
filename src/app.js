'use strict';


const server = process.server();

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require( `${server}/src/middleware/500.js`);
const notFound = require( `${server}/src/middleware/404.js` );
const v1Router = require( `${server}/docs/config/v1.js` );
// const swagger = require(`${server}/docs/config/swagger.js`);
// Prepare the express app
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/docs', express.static('docs'));
// Routes
app.use(v1Router);
app.use(notFound);
app.use(errorHandler);

let start = (port = process.env.PORT) => {
  app.listen(port, () => {
    console.log(`Server Up on ${port}`);
  });
};

module.exports = {app,start};