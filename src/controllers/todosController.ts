
import express from "express";
import Todos from "../models/todos.model";
import { Method } from "../utils/method";
import Controller from "./controller";

export default class TodosController extends Controller {

    constructor() {
        // Call super with the base path of this controller
        super("/todos");
    }

    /**
     * Define all routes this controller will use with the functions it should call
     */
    protected initializeRoutes() {
        super.route(Method.get, "", this.index);
        super.route(Method.post, "/store", this.store);
        super.route(Method.get, "/:id", this.show);
        super.route(Method.put, "/:id", this.update);
        super.route(Method.delete, "/:id", this.destroy);
    }

    /**
     * Return all the resources
     */
    private async index(req: express.Request, res: express.Response) {
        const allTodos = await Todos.findAll();
        res.json({
            data: allTodos,
            msg: "Succes",
        });
    }

    /**
     * Puts the resource in the database
     */
    private async store(req: express.Request, res: express.Response) {
        const todo = new Todos({
            description: req.body.description,
            name: req.body.name,
        });
        todo.save()
        .then(() => {
            res.json({
                data: todo,
                msg: "Succes",
            });
        });
    }

    /**
     * Returns the requested recourse in singular form
     */
    private async show(req: express.Request, res: express.Response) {
        const todoId = req.params.id;
        const todo = await Todos.findAll({
            where: {
                id: todoId,
            },
        });
        res.json({
            data: todo[0],
            msg: "succes",
        });
    }

    /**
     * Updates the resource
     */
    private async update(req: express.Request, res: express.Response) {
        const todoId = req.params.id;
        Todos.update({
            description: req.body.description,
            name: req.body.name,
        }, {where: {id: todoId}})
        .then(() => {
            return Todos.findAll({where: {id: todoId}});
        })
        .then((updatedTodo) => {
            res.json({
                data: updatedTodo[0],
                msg: "Succes",
            });
        });
    }

    /**
     * Remove the resource
     */
    private destroy(req: express.Request, res: express.Response) {
        const todoId = req.params.id;
        Todos.destroy({
            where: {
                id: todoId,
            },
        })
        .then(() => {
            return Todos.findAll();
        })
        .then((allTodos) => {
            res.json({
                data: allTodos,
                msg: "Succes",
            });
        });
    }
}
