const dbConfig = require('../config/database')
const mongoose = require('mongoose')

module.exports = {
    mongoose,
    URL: dbConfig.url,
    data: require('./data.model')(mongoose)
}