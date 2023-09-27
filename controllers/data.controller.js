const db = require('../models')
const data = db.data.barang

const readData = async (req, res) => {
    console.log('READ')
    const regexNama = new RegExp(req.query.nama, 'i')
    const regexUkuran = new RegExp(req.query.ukuran, 'i')
    const regexType = new RegExp(req.query.type, 'i')
    const regexBrand = new RegExp(req.query.brand, 'i')

    const limitData = req.query.limit ? req.query.limit : ''
    const offsetData = req.query.offset ? req.query.offset : ''

    const { nama, ukuran, type, brand } = req.query

    try {
        const response = await data.find({
            nama_item: regexNama,
            ukuran: regexUkuran,
            type: regexType,
            brand: regexBrand
        })
            .limit(limitData)
            .skip(offsetData)
            .sort({ nama_item: 1 })

        let totalData

        if (nama || ukuran || type || brand) {
            const total = await data.find({
                nama_item: regexNama,
                ukuran: regexUkuran,
                type: regexType,
                brand: regexBrand
            }).count()
            totalData = total
        } else {
            const total = await data.count()
            totalData = total
        }

        res.status(200).json({ data: response, total_data: totalData })
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