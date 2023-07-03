const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

router.get('/data', (req, res) => {
    const data = {
        nama: 'gilang',
        umur: '21',
        pekerjaan: 'Programmer'
    }
    res.json(data)
})

router.get('/home', (req, res) => {
    res.send('HELLO WORLD')
})

app.use('/', router)

app.listen(3000, () => {
    console.log('listening on port:3000');
});