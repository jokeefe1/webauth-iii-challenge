const express = require('express')
const helmet = require('helmet')
const login = require('./data/routes/login')
const register = require('./data/routes/register')
const users = require('./data/routes/users')
const server = express()

server.use(express.json())
server.use(helmet())
server.use('/api/login', login)
server.use('/api/register', register)
server.use('/api/users', users)

server.get('/', (req, res) => {
    res.json({ message: `Successfully accessed api`})
})

module.exports = server