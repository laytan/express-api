import express from "express";

import Controller from "./controller";

import { Method } from "../utils/method";

export default class HelloWorldController extends Controller {

    constructor() {
        // Call super with the base path of this controller
        super("/");
    }

    /**
     * Define all routes this controller will use with the functions it should call
     */
    protected initializeRoutes() {
        super.route(Method.get, "", this.hello);
    }

    /**
     * Return a json object with a hello world message
     */
    protected hello(req: express.Request, res: express.Response) {
        res.json({
            msg: "Hello, world!",
        });
    }
}
