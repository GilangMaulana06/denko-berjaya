const db = require('../models')
const data = db.data.barang

const readData = (req, res) => {
        console.log('READ')
        const regexNama = new RegExp(req.query.nama, 'i')
        const regexUkuran = new RegExp(req.query.ukuran, 'i')
        const regexType = new RegExp(req.query.type, 'i')
        const regexBrand = new RegExp(req.query.brand, 'i')
        data.find({
            nama_item: regexNama,
            ukuran: regexUkuran,
            type: regexType,
            brand: regexBrand
        }).sort({nama_item : 1})
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
    createData,
    updateData,
    deleteData
}