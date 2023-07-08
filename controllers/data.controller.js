const db = require('../models')
const data = db.data

const readData = (req, res) => {
    console.log('READ')
    data.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).send({ message: err.message }))
}

const readDataById = (req, res) => {
    console.log('READ BY ID')
    data.find({type : req.params.id})
        .then(data => res.json(data))
        .catch(err => res.status(400).send({ message: err.message }))
}

const createData = (req, res) => {
    console.log('CREATE')
    data.create(req.body)
        .then((response) => res.json(response).status(200))
        .catch(err => res.status(400).send({ message: err.message }))
}

const updateData = (req, res) => {
    console.log('UPDATE')
    data.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            nama_item: req.body.nama_item,
            type: req.body.type,
            brand: req.body.brand,
            ukuran: req.body.ukuran,
            modal: req.body.modal,
            harga_ecer: req.body.harga_ecer,
            harga_grosir: req.body.harga_grosir
        }
    }, { returnOriginal: false })
        .then((response) => res.json(response).status(200))
        .catch(err => res.status(400).send({ message: err.message }))
}

const deleteData = (req, res) => {
    console.log('DELETE')
    data.findOneAndDelete(({ _id: req.params.id }))
        .then(() => res.json({ message: 'Delete Berhasil' }).status(200))
        .catch(err => res.status(400).send({ message: err.message }))
}

module.exports = {
    readData,
    readDataById,
    createData,
    updateData,
    deleteData
}