/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('personnel_roster', table => {
        table.increments('personnel_id')
        table.string('first_name', 50).notNullable()
        table.string('middle_name', 50)
        table.string('last_name', 50).notNullable()
        table.string('pay_class', 50).notNullable()
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
        table.integer('related_records')
            .unsigned()
            .references('record_id')
            .inTable('personnel_records')
        table.text('notes', 1000)
        table.boolean('active')
    })
        .createTable('personnel_records', table => {
            table.increments('record_id')
            table.string('record').notNullable()
            table.string('category').notNullable().unique()
            table.text('description', 1000)
            table.integer('related_personnel')
                .unsigned()
                .references('personnel_id')
                .inTable('personnel_roster')
        })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('personnel_roster')
        .dropTableIfExists('personnel_records')
};