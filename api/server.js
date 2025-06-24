const express = require('express')
const app = express()
const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')
require('dotenv').config()

app.use(express.static('public'))

async function getDBConnection() {
  const db = await sqlite.open({
    filename: 'firehall.db3',
    driver: sqlite3.Database
  })
  return db
}


app.get('/api/personnel_roster', async function(req, res){
    try {
        let db = await getDBConnection()
        let personnel = await db.all('SELECT * from personnel_roster')
        await db.close()
        //console.log(res.json(personnel))
      } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Database error' })
      }
})


 const PORT = process.env.PORT || 8000

 app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
 })