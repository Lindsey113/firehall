const express = require('express')
const server = express()
const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')
const rosterRouter = require('./roster/router')
const cors = require('cors')
require('dotenv').config()

server.use(express.json())
server.use('/api/personnel_roster', rosterRouter)

const db = new sqlite3.Database("./firehall.db3", (err) => {
  if (err) console.error("DB error:", err.message);
  else console.log("✅ Connected to SQLite");
})


async function getDBConnection() { // eslint-disable-line
  const db = await sqlite.open({
    filename: 'firehall.db3',
    driver: sqlite3.Database
  })
  return db
}

// server.post("/api/personnel_roster", (req, res) => {
//   const {
//     first_name, middle_name, last_name, pay_class, address, city, province, postal_code, country, home_phone, mobile_phone, email, notes, related_records, active
//   } = req.body

//   const query =`
//       INSERT INTO personnel (first_name, middle_name, last_name, pay_class, address, city, province, postal_code, country, home_phone, mobile_phone, email, notes, related_records, active)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//   `

//   db.run(query,
//     [first_name, middle_name, last_name, pay_class, address, city, province, postal_code, country, home_phone, mobile_phone, email, notes, related_records, active ? 1 : 0],
//     function (err) {
//       if(err) {
//         console.error(err.message)
//         return res.status(500).json({ error: err.message})
//       }
//       res.json({ id: this.lastID, ...req.body})
//     }
//   )

// })



const PORT = process.env.PORT || 8000

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})