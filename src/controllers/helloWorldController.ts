import express from "express";
import todos from "../models/todos.model";
import { Method } from "../utils/method";
import Controller from "./controller";

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
        super.route(Method.get, "todos", this.index);
    }

    /**
     * Return a json object with a hello world message
     */
    private hello(req: express.Request, res: express.Response) {
        res.json({
            msg: "Hello, world!",
        });
    }

    private async index(req: express.Request, res: express.Response) {
        const allTodos = await todos.findAll();
        res.json({
            data: allTodos,
            msg: "Succes",
        });
    }
}
