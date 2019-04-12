"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
const method_1 = require("./method");
class HelloWorldController extends controller_1.default {
    constructor() {
        super("/");
    }
    hello(req, res) {
        res.json({
            msg: "Hello, world!",
        });
    }
    initializeRoutes() {
        super.route(method_1.Method.get, "", this.hello);
    }
}
exports.default = HelloWorldController;
//# sourceMappingURL=helloWorldController.js.map