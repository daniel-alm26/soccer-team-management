const express = require('express')
const cors = require('cors')

const app = express()

// Config JSON response
app.use(express.json())

// Solve CORS
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}))

// Routes
const TeamRoutes = require('./routes/TeamRoutes')

app.use('/teams', TeamRoutes)


app.listen(5000)