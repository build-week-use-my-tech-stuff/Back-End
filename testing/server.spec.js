const request = require("supertest");

const server = require("../server");

describe("server GET", () => {
  it("should respond with 200 OK", () => {
    return request(server)
      .get("/")
      .expect(200);
  });
  it("should respond with JSON", () => {
    return request(server)
      .get("/")
      .expect("Content-Type", /json/);
  });
});
