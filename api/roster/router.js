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

router.post('/', async (req, res, next) => {
    try {
        const newPerson = await Roster.insertNewPersonnel(req.body)
        if(!newPerson) {
            return res.status(400).json({
                message: "All fields must be filled"
            })
        }
        res.status(201).json(newPerson)
    } catch(err) {
        next(err)
    }
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: "Something went wrong in the Roster router",
        errorMessage: err.message,
        stack: err.stack
    })
})

module.exports = router