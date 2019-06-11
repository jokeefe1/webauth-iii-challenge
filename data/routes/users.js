const express = require('express');
const db = require('../model-users')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const allUsers = await db.find()
        res.status(200).json({ message: `Successfully retrieved all users`, allUsers})
    } catch (error) {
        res.status(500).json({ error: `There was an error retrieving users`, error})
    }
})

module.exports = router;
