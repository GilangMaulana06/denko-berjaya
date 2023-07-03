const db = require('../models')
const data = db.data

const readData = async (req, res) => {
    await data.find()
        .then(data =>  res.json({message: "Hello, World!"}))
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