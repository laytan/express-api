const chai = require("chai");
const expect = chai.expect;

const index = require("../controllers/indexController");

process.env.ENVIRONMENT = 'test';

it("Passes an empty test", () => {});

describe("IndexController", () => {

    it("get returns hello world in message prop", () => {
        index.get('', {
            json: (res) => {
                expect(res.message).to.equal("Hello, world!");
            }
        });
    });
});