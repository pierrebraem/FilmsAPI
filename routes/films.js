const express = require('express')
const { readFileSync, writeFileSync } = require("fs")
const router = express.Router()

router.get('/', (req, res) => {
    const films = JSON.parse(readFileSync('./json/films.json', 'utf-8'))
    res.send(films)
})

module.exports = router