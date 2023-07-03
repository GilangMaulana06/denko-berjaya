const express = require('express');
const { readData, createData } = require('../controllers/data.controller')

const router = express.Router()

router.get('/test', (req, res) => {
    res.send('HELLO WORLD')
})
router.get('/data', readData)
router.post('/data', createData)

module.exports = router