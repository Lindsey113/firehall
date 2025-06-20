/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('personnel_roster').truncate()
  await knex('personnel_roster').insert([
    {first_name: 'Lindsey', middle_name: 'Nicole', last_name: 'McCluskey',
      address: '391 Old Salmon Arm Rd', address_2: '', city: 'Enderby',
      state_province: 'BC', zip_postal: 'V4Y 4G4', country: 'Canada',
      home_phone: null, mobile_phone: 2503099310, mobile_provider: 'Telus',
      work_phone: null, email: 'lindsey_mccluskey@yahoo.ca', active: true
    }
  ]);
};
