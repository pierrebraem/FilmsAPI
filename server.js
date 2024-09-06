const express = require('express')
const app = express()

const helloRouter = require('./routes/hello')
const filmsRouter = require('./routes/films')

app.use('/hello', helloRouter)
app.use('/film', filmsRouter)

app.listen(3000, () => console.log('Server Started'))