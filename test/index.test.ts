import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import app from "../src/index";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Testing", () => {
    // tslint:disable-next-line:no-empty
    it("Passes an empty test", () => {});

    describe("API Tests", () => {
        it("/ route should return a msg with: 'Hello, world!'.", () => {
          return chai.request(app.server).get("/")
            .then((res) => {
              expect(res.body.msg).to.equal("Hello, world!");
            });
        });
    });
});
