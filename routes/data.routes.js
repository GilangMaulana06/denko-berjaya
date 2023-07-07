const express = require('express');
const { readData, createData, deleteData } = require('../controllers/data.controller')

const router = express.Router()

router.get('/data', readData)
router.post('/data', createData)
router.delete('/data/:id', deleteData)

module.exports = router