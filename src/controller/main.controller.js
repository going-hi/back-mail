const {Router} = require('express')
const mailService = require('../services/mail.service')
const router = Router()
const EMAILS = require('../app.constants')

// * Post request
//* body {
//*    email
//*     name
//*     city
//*     tel
//*     message
//* }


router.post('/', async (req, res, next) => {
    try {
        const {email, name, city, tel, message} = req.body
        EMAILS.forEach( EMAIL => {
            mailService.sendMessage(EMAIL, {email, name, city, tel, message})
        })
        res.status(204).json({})
    }catch(e) {
        next(e)
    }
})


module.exports = router