const express = require('express')

const db = require('./utils/database')
const quoteRouter = require('./quotes/quotes.router')

const port = 9000
const app = express();

app.use(express.json())

db.authenticate()
    .then(() => console.log('Database Sincronizada correctamente'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database Sincronizada correctamente'))
    .catch((err) => console.log(err))



app.get('/', (req, res) => {
    res.status(200).json({
    messeger: 'probando'
    });
});


app.use('/api/v1', quoteRouter)



app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
