import cors from 'cors'
import express from 'express'
import 'dotenv/config'
import consoleLogger from './middleware/console.logger.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(consoleLogger)

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Welcome to the server')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    })

