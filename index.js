// const express = require('express')
// const app = express()
// const sqlite3 = require('sqlite3')
// const sqlite = require('sqlite')

// app.use(express.static('public'))

// async function getDBConnection() {
//   const db = await sqlite.open({
//     filename: 'firehall.db3',
//     driver: sqlite3.Database
//   })
// }

require('dotenv').config()
 const server = require('./api/server')

 const PORT = process.env.PORT

 server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
 })