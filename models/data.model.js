module.exports = mongoose => {

    const schema = mongoose.Schema(
        {
            nama_item: String,
            ukuran: String,
            type: String
        }, {
        timestamps: true,
        capped: { size: 1024 },
        bufferCommands: false,
        autoCreate: false
    }
    )

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id

        return object
    })

    return mongoose.model('data_barang', schema)
}