/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const people = [
  {first_name: 'Lindsey', middle_name: 'Nicole', last_name: 'McCluskey', pay_class: 'Developer',
      address: '391 Old Salmon Arm Rd', address_2: '', city: 'Enderby',
      state_province: 'BC', zip_postal: 'V4Y 4G4', country: 'Canada',
      home_phone: null, mobile_phone: 2503099310, mobile_provider: 'Telus',
      work_phone: null, email: 'lindsey_mccluskey@yahoo.ca', active: true
    },
    {first_name: 'Henry', middle_name: 'Tucker', last_name: 'Williamson', pay_class: 'Firefighter',
      address: '1234 Real Rd', address_2: '', city: 'Kelowna',
      state_province: 'BC', zip_postal: 'V3I 3F6', country: 'Canada',
      home_phone: 1234567890, mobile_phone: 123456789, mobile_provider: 'Koodo',
      work_phone: null, email: 'henry@email.com', related_records: null, notes: 'hes alright', active: true
    },
    {first_name: 'Tammy', middle_name: 'Is', last_name: 'Thecoolest', pay_class: 'Firefighter',
      address: '9876 Very Real St', address_2: 'PO BOX 999', city: 'Pentiction',
      state_province: 'BC', zip_postal: 'V3I 6F4', country: 'Canada',
      home_phone: 1234567890, mobile_phone: null, mobile_provider: 'Koodo',
      work_phone: 768344488, email: 'tam@email.com', related_records: null, notes: 'shes cool', active: false
    }
]

exports.people = people

exports.seed = function(knex) {
  return knex('personnel_roster').insert(people)
};
