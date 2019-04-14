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
