exports.seed = function(knex, Promise) {
  return knex("comments").insert([
    {
      user_id: "3",
      tech_id: "1",
      date: new Date().toString(),
      content: "Hi, would you be willing to go a little lower?"
    }, // 1
    {
      user_id: "1",
      tech_id: "1",
      date: new Date().toString(),
      content: "Maybe! What were you thinking?"
    }, // 2
    {
      user_id: "2",
      tech_id: "2",
      date: new Date().toString(),
      content: "i use this cam for work. it's suuuper reliable!"
    } // 3
  ]);
};
