require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const models = require('./models/models')
const router = require('./routes/index')
const errorHandler = require('./middleware/errorHandlingWiddleware')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))//поменять на фолс

// parse application/json
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send(`Hi man Hi`)
})
//обработка ошибок  последний мидлваре
app.use(errorHandler)

const PORT = process.env.PORT || 5000
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()