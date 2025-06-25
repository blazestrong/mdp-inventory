import express from 'express'

const router = express.Router()

router.post('/login', (req, res) => {
  const { username, password } = req.body

  if (username === 'admin' && password === '1234') {
    return res.json({ success: true, user: { id: 1, username: 'admin' } })
  }

  return res.status(401).json({ message: 'Invalid credentials' })
})

export default router
