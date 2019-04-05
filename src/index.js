// Require dependencies
console.log("Starting up API");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
require("dotenv").config();

// Require utility functions
const utils = require("./utils/utils");

// Require own routes
const routes = require("./routes/routes");

// Require own middleware
const middleware = require('./middleware/middleware');

// Connect to the database
require('./database/database');

// Initialize app
utils.logRed("Initializing app");
const app = express();

utils.logRed("Using dependent middleware");
// TODO: Make this not hard-coded
app.use(logger('dev'));

app.use(
    cors({
        origin: process.env.ALLOWED_ORIGIN,
    })
);

app.use(bodyParser.json());

// Middleware
utils.logRed("Using custom middleware");

// Routes
utils.logRed("Defining routes");
app.use(routes.indexRoutes);

// 404
app.use(middleware.notFound);

// Error handling
app.use(middleware.errorHandler);

// Start listening
utils.logRed("Trying to listen");
//The port to listen on, process.env.PORT gets set by your hosting
const port = process.env.PORT || 1234;
// Removes "eardinuse" error when testing
if (!module.parent) {
    //Start listening
    app.listen(port, () => {
        console.log(`listening on ${port}`);
    });
}

// Make the app available when testing
module.exports = app;