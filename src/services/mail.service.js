const nodemailer = require('nodemailer')

class MailService {
    constructor() {
        // * init mailClient 
        this.transport = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }
    
    async sendMessage(to, {email, city, name, tel, message}) {
        try {
            await this.transport.sendMail({
                from: process.env.SMTP_USER,
                to,
                subject: 'Новый клиент',
                text: '',
                html:  `
                    <h2>${name}</h2>
                    <h2>${email}</h2>
                    <h2>Город/Страна: ${city}</h2>
                    <h2>Телефон: ${tel}</h2>
                    <h2>Сообщение: ${message}</h2>
                `
            })
        }catch(e) {
            console.log(e)
        }
    }
}

const mailService = new MailService()
module.exports = mailService