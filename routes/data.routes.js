const express = require('express');
const { readData, createData } = require('../controllers/data.controller')

const router = express.Router()

router.get('/test', (req, res) => {
    res.send('HELLO GILANG')
})
router.get('/data', readData)
router.post('/data', createData)

module.exports = router