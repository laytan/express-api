import express from "express";
import { Method } from "../utils/method";

/**
 * The foundation of a controller, all controllers must extend this class
 */
export default abstract class Controller {
    private path: string;
    private router: express.Router;

    // Exposing our router to be read by the app
    get _router(): express.Router {
        return this.router;
    }

    /**
     * Sets the base path, creates a new router and calls the initializeRoutes function
     * @param path The base path of this controller
     */
    constructor(path: string) {
        this.path = path;
        this.router = express.Router();
        this.initializeRoutes();
    }

    /**
     * "Contract" so the child classes NEED to define routes
     */
    protected abstract initializeRoutes(): void;

    /**
     * Adds a route to the controllers router
     * @param method What method to listen to example: get, post, delete, put
     * @param addedPath The path to add to the base path where you want this function to call
     * @param fn The function to call when this route is hit
     */
    protected route(method: Method, addedPath: string, fn: any) {
        switch (method) {
            case Method.get:
                this.router.get(this.path + addedPath, fn);
                break;
            case Method.post:
                this.router.post(this.path + addedPath, fn);
                break;
        }
    }
}
