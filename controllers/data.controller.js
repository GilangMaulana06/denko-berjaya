const db = require('../models')
const data = db.data

const readData = (req, res) => {
    data.find()
        .then(data =>  res.json(data))
        .catch(err => res.status(500).send({ message: err.message }))
}

const createData = (req, res) => {
    data.create(req.body)
        .then(() => res.send({ message: 'Data berhasil disimpan' }))
        .catch(err => res.status(500).send({ message: err.message }))
}

module.exports = {
    readData,
    createData
}