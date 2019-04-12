"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const method_1 = require("./method");
class Controller {
    get _router() {
        return this.router;
    }
    constructor(path) {
        this.path = path;
        this.router = express_1.default.Router();
        this.initializeRoutes();
    }
    route(method, addedPath, fn) {
        switch (method) {
            case method_1.Method.get:
                this.router.get(this.path + addedPath, fn);
                break;
            case method_1.Method.post:
                this.router.post(this.path + addedPath, fn);
                break;
        }
    }
}
exports.default = Controller;
//# sourceMappingURL=controller.js.map