const db = require("../database/dbConfig");
const Auth = require("../authorization/authModel");

const user = {
  username: "test",
  password: "testpw",
  email: "testem"
};

describe("authModel", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  describe("addUser", () => {
    it("should insert the user", async () => {
      await Auth.addUser(user);
      const usersTbl = await db("users");
      expect(usersTbl).toHaveLength(1);
    });
    it("the inserted user's email should be testem", async () => {
      await Auth.addUser(user);
      expect(user.email).toBe("testem");
    });
  });
  describe("getUserByName", () => {
    it("should insert the user, get that user by name, and return their password", async () => {
      await Auth.addUser(user);
      const myUser = await Auth.getUserByName({ username: "test" });
      expect(myUser.password).toBe("testpw");
    });
    it("should insert the user, get that user by name, and return their email", async () => {
      await Auth.addUser(user);
      const myUser = await Auth.getUserByName({ username: "test" });
      expect(myUser.email).toBe("testem");
    });
  });
});
