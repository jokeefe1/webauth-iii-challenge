const db = require('../model-users')
const bcrypt = require('bcryptjs')

await function protected(req, res, next) {
    const { username, password } = req.body

    try {
        if (username && password) {
            const user = await db.findByUser(username)   
            if (user && bcrypt.compareSync(password, user.password)) {
                next()
            } else {
                res.status(401).json({ message: `The user is unauthorized`})
            }
        } else {
            res.status(401).json({ message: `Unauthorized user`})
        }
    } catch (error) {
        res.status(500).json({ error: `There was an error authorizing user`, error})
    }
}

module.exports = protected