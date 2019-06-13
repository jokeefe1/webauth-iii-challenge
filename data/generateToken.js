const SECRET = process.env.JWT_SECRET
const jwt = require('jsonwebtoken')

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }

    const options = {
        expires: '1d'
    }

    return jwt.sign(payload, SECRET, options)
}

module.exports = generateToken