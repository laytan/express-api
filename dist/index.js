"use strict";
// // Require dependencies
// import bodyParser from "body-parser";
// import cors from "cors";
// // require("dotenv").config();
// import dotenv from "dotenv";
// import express from "express";
// import logger from "morgan";
// dotenv.config();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // Require own routes
// import routes from "./routes/routes";
// // Require own middleware
// import middleware from "./middleware/middleware";
// // Connect to the database
// import "./database/database";
// // Initialize app
// const app = express();
// // TODO: Make this not hard-coded
// app.use(logger("dev"));
// app.use(
//     cors({
//         origin: process.env.ALLOWED_ORIGIN,
//     })
// );
// app.use(bodyParser.json());
// // Middleware
// // Routes
// app.use(routes.indexRoutes);
// // 404
// app.use(middleware.notFound);
// // Error handling
// app.use(middleware.errorHandler);
// // Start listening
// // The port to listen on, process.env.PORT gets set by your hosting
// const port = process.env.PORT || 1234;
// // Removes "eardinuse" error when testing
// if (!module.parent) {
//     // Start listening
//     app.listen(port, () => {
//         // tslint:disable-next-line:no-console
//         console.log(`listening on ${port}`);
//     });
// }
// // Make the app available when testing
// module.exports = app;
const app_1 = __importDefault(require("./app"));
const helloWorldController_1 = __importDefault(require("./helloWorldController"));
const app = new app_1.default([
    new helloWorldController_1.default(),
], 1234);
app.listen();
exports.default = app;
//# sourceMappingURL=index.js.map