exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      username: "techRenterGuy",
      password: "pass",
      email: "techRenterGuy@gmail.com"
    }, // 1
    { username: "sasha1010", password: "pass", email: "sasha1010@gmail.com" }, // 2
    { username: "LambdaGrad", password: "pass", email: "lambdaGrad@gmail.com" }
  ]);
};
