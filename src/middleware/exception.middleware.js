const ApiError = require('../error/api.error')

function exceptionMiddleware(err, req, res, next) {
    if(err instanceof ApiError) {
        res.status(err.status).json({message: err.message})
    }
    console.log(err)
    res.status(500).json({message: 'Ошибка сервера'})
}


module.exports = exceptionMiddleware