const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const URI = process.env.DATABASE_URL

async function connect() {
    try {
        await mongoose.connect(URI, { useNewUrlParser : true, useUnifiedTopology : true })
        console.log("Connect successfully to mongoDB")
        return true
    }
    catch(err)
    {
        console.log('Failed to connect to database')
        return false
    }
}

module.exports = { connect }