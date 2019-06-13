
exports.up = async function(knex) {
  await knex.schema.createTable('users', tbl => {
      tbl.increments()
      tbl.string('username').unique('username').notNullable()
      tbl.string('password').notNullable()
      tbl.string('department')
      
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users')
};
