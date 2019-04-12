"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __importStar(require("body-parser"));
const express_1 = __importDefault(require("express"));
class App {
    constructor(controllers, port) {
        this.app = express_1.default();
        this.port = port;
        this.initializeMiddleware();
        this.initializeControllers(controllers);
    }
    listen() {
        this.server = this.app.listen(this.port, () => {
            // tslint:disable-next-line:no-console
            console.log(`listening on: http://127.0.0.1:${this.port}`);
        });
    }
    initializeMiddleware() {
        this.app.use(bodyParser.json());
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use("/", controller._router);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map