const inquirer = require("inquirer");
const fs = require("fs");


const run = async () => {
    // Gets the user input
    const answers = await askQuestions();
    const {
        CONTROLLERNAME,
        BASEPATH
    } = answers;

    // Change the cases to match ts's defaults
    const className = toPascalCase(CONTROLLERNAME);
    const fileName = toLowerCamelCase(CONTROLLERNAME);

    // Gets the new files content
    const content = getContent(className, BASEPATH);

    // Creates the file and adds in the content, returns false if the file exists
    const succes = createFile(`/src/controllers/${fileName}.ts`, content);
    if (!succes) {
        console.log("File already exists");
    } else {
        console.log("I did it because i have no other purpose :/");
    }
};

const toPascalCase = (v) => {
    return v.substring(0, 1).toUpperCase() + v.substring(1);
};

const toLowerCamelCase = (v) => {
    return v.substring(0, 1).toLowerCase() + v.substring(1);
};

/**
 * Asks questions to the user and returns a promise with all the answers
 */
const askQuestions = () => {
    const questions = [{
            name: "CONTROLLERNAME",
            type: "input",
            message: "What is the name of the desired controller",
        },
        {
            name: "BASEPATH",
            type: "input",
            message: "What is the starting route to listen from",
        }
    ];

    console.log("I'm doing it you lazy bastard, answer me as it's the least you can do!");
    return inquirer.prompt(questions);
};

/**
 * Creates a file and adds the content into it, if the file already exists it will return false
 * @param {string} filename The name of the file to create
 * @param {string} content The content to put in this file
 */
const createFile = (filename, content) => {
    const filePath = `${process.cwd()}/${filename}`;
    if (fs.existsSync(filePath)) {
        return false;
    }
    fs.writeFileSync(filePath, content);
    return true;
};

/**
 * Generates dynamic controller and returns it
 * @param {string} name The name of the controller class
 * @param {string} path The base path to route from
 */
const getContent = (name, path) => {
    return `
import express from "express";
import { Method } from "../utils/method";
import Controller from "./controller";

export default class ${name} extends Controller {

    constructor() {
        // Call super with the base path of this controller
        super("${path}");
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
        //
    }

    /**
     * Puts the resource in the database
     */
    private async store(req: express.Request, res: express.Response) {
        //
    }

    /**
     * Returns the requested recourse in singular form
     */
    private async show(req: express.Request, res: express.Response) {
        //
    }

    /**
     * Updates the resource
     */
    private async update(req: express.Request, res: express.Response) {
        //
    }

    /**
     * Remove the resource
     */
    private async destroy(req: express.Request, res: express.Response) {
        //
    }
}
`;
};

// Run the CLI
run();