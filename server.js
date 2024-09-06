const express = require('express')
const app = express()

const helloRouter = require('./routes/hello')

app.use('/hello', helloRouter)

app.listen(3000, () => console.log('Server Started'))