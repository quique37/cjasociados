const express = require('express')
const app = express()

app.use(express.static('register.html'))

app.listen(3000)
