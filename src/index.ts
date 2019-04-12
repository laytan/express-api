// Import the main app class
import App from "./app";

/**
 * Controller imports
 */
import HelloWorldController from "./controllers/helloWorldController";

/**
 * Initializes the app, passing in All the controllers and a port to listen on
 */
const app = new App(
    [
        new HelloWorldController(),
    ],
    1234
);

// Export the app for testing
export default app;
