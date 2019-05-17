const db = require("../database/dbConfig");
const Tech = require("../tech/techModel");
const request = require("supertest");
const router = require("../tech/techRouter");

let testTech = {
  name: "test",
  user_id: 1,
  category: "testcat",
  description: "testdesc",
  cost: "1",
  picture: "https://test.jpg"
};

describe("techModel", () => {
  beforeEach(async () => {
    await db("tech").truncate();
  });
  describe("insert", () => {
    it("should insert the tech", async () => {
      await Tech.insert(testTech);
      const techTbl = await db("tech");
      expect(techTbl).toHaveLength(1);
    });
    it("should respond with an array of tech", async () => {
      const myTech = await Tech.get();
      expect(Array.isArray(myTech)).toBe(true);
    });
    it("should respond with 400 Bad Request when sending an empty post", async () => {
      return request(router)
        .post("/")
        .expect(res.body.message)
        .toBe("Please provide a name for your tech!");
    });
  });
  describe("get", () => {
    it("should respond with an array of tech", async () => {
      const myTech = await Tech.get();
      expect(Array.isArray(myTech)).toBeTruthy();
    });
  });
});
