const db = require('../../data/db-config')

async function getAllRosters() {
    const result = await db("personnel_roster")
    return result
}

async function insertNewPersonnel(person) {
    const [personnel_id] = await db('personnel_roster').insert(person)
    const newPerson = await db('personnel_roster').where({ personnel_id }).first()
    if (!newPerson) {
        return null
    }
    newPerson.active = newPerson.active ? true : false
    return newPerson
}

async function getPersonById(id) {
    const person = await db('personnel_roster').where({personnel_id: id}).first()
    return person
}

async function deletePersonById(id) {
    return db('personnel_roster').where('personnel_id', id).del()
}

module.exports = {
    getAllRosters,
    insertNewPersonnel,
    getPersonById,
    deletePersonById
}