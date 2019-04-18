const db = require("../database/dbConfig");
const Tech = require("../tech/techModel");

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
  });
  describe("get", () => {
    it("should respond with an array of tech", async () => {
      const myTech = await Tech.get();
      expect(Array.isArray(myTech)).toBe(true);
    });
  });
});
