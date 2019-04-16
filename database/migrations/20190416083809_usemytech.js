exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl.string("password", 128).notNullable();
      tbl.string("email", 128).notNullable();
      tbl.string("firstname", 128);
      tbl.string("lastname", 128);
      tbl.string("country", 128);
      tbl.string("state", 128);
      tbl.string("phonenumber", 128);
      tbl.string("picture");
    })
    .createTable("tech", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.text("category").notNullable();
      tbl.text("description").notNullable;
      tbl.string("picture").notNullable();
      tbl.string("cost").notNullable();
      tbl.boolean("availability");
    })
    .createTable("comments", tbl => {
      tbl.increments();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("tech_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tech")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.string("date");
      tbl.text("content").notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("tech")
    .dropTableIfExists("comments");
};
