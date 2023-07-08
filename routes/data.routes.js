const express = require('express');
const { readData, createData, updateData, deleteData } = require('../controllers/data.controller')

const router = express.Router()

router.get('/data', readData)
router.post('/data', createData)
router.put('/data/:id', updateData)
router.delete('/data/:id', deleteData)

module.exports = router