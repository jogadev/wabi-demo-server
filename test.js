const app = require("./app");
const supertest = require("supertest");

describe("Simple tests", () => {
  it("Retreives randomized data", async () => {
    await supertest(app).get("/random").expect(200);
  });
  it("Retrieves data from database", async () => {
    await supertest(app).get("/data").expect(200);
  });
});
