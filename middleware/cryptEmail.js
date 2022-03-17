const cryptoJS = require('crypto-js')


// encryption email
module.exports = (req, res, next) => {
    const email = req.body.email
    console.log(email)
    const encryptedEmail = cryptoJS.HmacSHA256(email, process.env.CJS).toString()
    req.email = encryptedEmail
    next();
}