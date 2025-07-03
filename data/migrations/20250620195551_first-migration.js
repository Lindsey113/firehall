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
        table.integer('related_inventory')
            .unsigned()
            .references('inv_eq_id')
            .inTable('inventory_equipment')
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
            table.integer('related_inventory')
                .unsigned()
                .references('inv_eq_id')
                .inTable('inventory_equipment')
        })
        .createTable('inventory_equipment', table => {
            table.increments('inv_eq_id')
            table.string('asset').notNullable()
            table.string('category').notNullable()
            table.string('task')
            table.date('last_completed')
        })
        .createTable('inventory_group_recordings', table => {
            table.increments('recording_id')
            table.string('name')
            table.string('category')
            table.string('KMs')
            table.integer('hours')
            table.integer('count')
            table.string('new_reading')
            table.date('day_task_completed')
        })
        .createTable('inventory_report_inv', table => {
            table.string('name')
            table.string('category')
            table.integer('serial_num')
            table.string('make')
            table.string('model')
            table.integer('year')
            table.string('location')
            table.integer('purchace_price')
            table.integer('assigned_to')
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
        .dropTableIfExists('inventory_equipment')
        .dropTableIfExists('inventory_group_recordings')
        .dropTableIfExists('inventory_report_inv')
};