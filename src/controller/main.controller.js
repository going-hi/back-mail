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

// http://localhost:5000/
router.post('/', async (req, res, next) => {
    try {
        const {email, name, city, tel} = req.body
        console.log(EMAILS)
        EMAILS.forEach( EMAIL => {
            mailService.sendMessage(EMAIL, {email, name, city, tel})
        })
        await mailService.sendMessage(req.body.email, {email, name, city, tel})
        res.status(204).json({})
    }catch(e) {
        next(e)
    }
})


module.exports = router