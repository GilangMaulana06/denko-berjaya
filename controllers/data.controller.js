const db = require('../models')
const data = db.data

const readData = (req, res) => {
    data.find()
        .then(data =>  res.json(data))
        .catch(err => res.status(500).send({ message: err.message }))
}

const createData = (req, res) => {
    data.create(req.body)
        .then((response) => res.json(response).status(200))
        .catch(err => res.status(500).send({ message: err.message }))
}

const deleteData = (req, res) => {
    console.log(req.params)
    data.findOneAndDelete(({_id: req.params.id}))
        .then((response) => res.json({message: 'Delete Berhasil'}).status(200))
        .catch(err => res.status(500).send({ message: err.message }))
}

module.exports = {
    readData,
    createData,
    deleteData
}