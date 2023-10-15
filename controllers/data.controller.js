const db = require('../models')
const data = db.data.barang

const readData = async (req, res) => {
    console.log('READ')
    const { nama, ukuran, type, brand } = req.query

    const regexNama = new RegExp(nama, 'i')
    const regexType = new RegExp(type, 'i')
    const regexBrand = new RegExp(brand, 'i')
    let regexUkuran

    if (ukuran?.includes('*')) {
        regexUkuran = new RegExp(ukuran.replace('*', `\\*`), 'i')
    } else {
        regexUkuran = new RegExp(ukuran, 'i')
    }

    try {
        const response = await data.find({
            nama_item: regexNama,
            ukuran: regexUkuran,
            type: regexType,
            brand: regexBrand
        })
            .sort({ nama_item: 1 })

        res.status(200).json({ data: response })
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
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