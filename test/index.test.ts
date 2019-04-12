import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import app from "../src/index";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Testing", () => {
    // tslint:disable-next-line:no-empty
    it("Passes an empty test", () => {});

    it("env variables are loaded", () => {
      expect(process.env.TEST).to.equal("WORKING");
    });

    describe("API Tests", () => {
        it("/ route should return a msg with: 'Hello, world!'.", () => {
          return chai.request(app.server).get("/")
            .then((res) => {
              expect(res.body.msg).to.equal("Hello, world!");
            });
        });
    });

    describe("sequelize", () => {
      it("should connect to the database", (done) => {
        app._db.authenticate().then(() => {
          done();
        })
        .catch((err: Error) => {
          done(err);
        });
      });
    });
});
