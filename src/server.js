import express from 'express'
import setupMiddware from './middleware'
import { restRouter } from './api'
import { connect } from './db'
import { signin, protect } from './api/modules/auth'
// Declare an app from express
const app = express()

// solution code
setupMiddware(app)
connect()

app.use('/signin', signin)


// I wrote this below
app.get('/', (req, res) => {
    res.json({ok: true})
})


// solution code catch all
// app.all('*', (req, res) => {
//     res.json({ok: true})
// })

export default app
