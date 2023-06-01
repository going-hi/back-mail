const dotenv = require('dotenv')
dotenv.config()

const exceptionMiddleware = require('./middleware/exception.middleware')
const express = require('express')
const cors = require('cors')
const mainRouter = require('./controller/main.controller')

const app = express()

const PORT = process.env.PORT || 5000

// * Base init middleware
app.use(express.json())
app.use(cors())

// * Routes
app.use('/api', mainRouter)

app.use(exceptionMiddleware)

// * function start app
const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
    }catch(e) {
        console.error(e)
    }
}

start(exceptionMiddleware)