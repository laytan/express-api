import * as bodyParser from "body-parser";
import express from "express";
import http from "http";
import Controller from "./controllers/controller";
import dbConnect from "./database";

/**
 * The entry point of our application, everything gets loaded in here
 */
export default class App {
    // Expose the server for testing
    public server: http.Server;

    private db: any;
    private app: express.Application;
    private port: number;

    /**
     * Initializes everything and then starts to listen
     * @param controllers An array of controllers to initialize
     * @param port The port to listen on
     */
    constructor(controllers: [Controller], port: number) {
        this.app = express();
        this.port = port;

        // Connect to the database
        this.db = dbConnect();

        this.initializeMiddleware();
        this.initializeControllers(controllers);

        this.listen();
    }

    // Get the database connection
    get _db() {
        return this.db;
    }

    /**
     * "Starts" the server on the port specified and logs the base address of the app,
     * Also sets server so we can test the endpoints
     */
    private listen() {
        this.server = this.app.listen(this.port, () => {
            // tslint:disable-next-line:no-console
            console.log(`listening on: http://127.0.0.1:${this.port}`);
        });
    }

    /**
     * Initialize all the middleware here
     */
    private initializeMiddleware() {
        this.app.use(bodyParser.json());
    }

    /**
     * Initializes all controllers
     * @param controllers An array of controllers to initialize
     */
    private initializeControllers(controllers: [Controller]) {
        controllers.forEach((controller) => {
            this.app.use("/", controller._router);
        });
    }
}
