const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router()
const db = require('./models')
const routes = require('./routes/data.routes');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

db.mongoose.connect(db.URL, mongooseConfig)
    .then(() => console.log('database connected'))
    .catch(err => {
        console.log('gagal connect')
        process.exit();
    })

app.use('/', routes)

app.listen(3000, () => {
    console.log('listening on port:3000');
});