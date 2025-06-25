const db = require('../../data/db-config')

async function getAllRosters() {
    const result = await db("personnel_roster")
    return result
}

module.exports = { getAllRosters }