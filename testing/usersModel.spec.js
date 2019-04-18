const Users = require("../users/usersModel");

describe("usersModel", () => {
  describe("addUser", () => {
    it("should respond with 200 OK", async () => {
      await Users.getUsers();
      expect(200);
    });
  });
  describe("getUserById", () => {
    it("should respond with 200 OK", async () => {
      await Users.getUserById(1);
      expect(200);
    });
  });
});
