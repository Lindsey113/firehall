const router = require('express').Router()
const Roster = require('./model')

router.get('/', (req, res, next) => {
    Roster.getAllRosters()
        .then(rost => {
            res.status(200).json(rost)
            console.log(rost)
        })
        .catch(err => {
            next(err)
        })
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: "Something went wrong in the Roster router",
        errorMessage: err.message,
        stack: err.stack
    })
})

module.exports = router