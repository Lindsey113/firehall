const express = require('express')
const server = express()
const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')
const rosterRouter = require('./roster/router')
const cors = require('cors')
require('dotenv').config()

server.use(cors())
server.use(express.json())
server.use('/api/personnel_roster', rosterRouter)

async function getDBConnection() { // eslint-disable-line
  const db = await sqlite.open({
    filename: 'firehall.db3',
    driver: sqlite3.Database
  })
  return db
}

const PORT = process.env.PORT || 8000

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})