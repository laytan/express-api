// Import the main app class
import App from "./app";

/**
 * Controller imports
 */
import TodosController from "./controllers/todosController";

// Initialize dotenv
import * as dotenv from "dotenv";
dotenv.config();

/**
 * Initializes the app, passing in All the controllers and a port to listen on
 */
const app = new App(
    [
        new TodosController(),
    ],
    1234
);

// Export the app for testing
export default app;
