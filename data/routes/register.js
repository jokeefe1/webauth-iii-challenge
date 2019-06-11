const express = require('express');
const bcrypt = require('bcryptjs')
const db = require('../model-users')
const router = express.Router();

router.post('/', async (req, res) => {
    const credentials = req.body

    if (credentials.username && credentials.password) {
        try {
            const hash = await bcrypt.hashSync(credentials.password, 12)
            credentials.password = hash
            const newUser = await db.add(credentials)
            res.status(200).json({ message: `User successfully registered`, newUser})
        } catch (error) {
            res.status(500).json({ error: `There was a problem registering user`, error})
        }
    }
})

module.exports = router;
