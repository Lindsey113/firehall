/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('personnel_roster', table => {
        table.increments('personnel_id')
        table.string('first_name', 25).notNullable()
        table.string('middle_name', 25)
        table.string('last_name', 40).notNullable()
        table.string('address').notNullable()
        table.string('address_2')
        table.string('city').notNullable()
        table.string('state_province').notNullable()
        table.string('zip_postal').notNullable()
        table.string('country').notNullable()
        table.integer('home_phone')
        table.integer('mobile_phone')
        table.string('mobile_provider')
        table.integer('work_phone')
        table.string('email').unique()
        table.boolean('active')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('personnel_roster')
};
