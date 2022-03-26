import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table.string('email', 150).notNullable().unique();
        table.string('first_name', 60).notNullable();
        table.string('last_name', 80).notNullable();
        table.timestamps(true, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user');
}
