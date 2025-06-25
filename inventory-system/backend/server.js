import express, { json } from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.js'

const app = express()
app.use(cors())
app.use(json())

app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong from backend' })
})


app.use('/api/auth', authRoutes)

app.listen(5000, () => {
  console.log('Server running at http://localhost:5000')
})