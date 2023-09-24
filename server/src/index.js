const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const route = require('./routes')
const database = require('./config/database')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Midlewares
// use bodyParser to get data from req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true , limit: '30mb' }))
app.use(cors())
app.use(morgan('combined'))

// Connect to Database (MongoDB) and start server
if(database.connect())
{
    app.listen(PORT, () => {
        console.log(`Server is runing on port ${PORT}`)
    })
}

// routing
route(app)
