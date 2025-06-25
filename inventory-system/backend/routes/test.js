
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong from backend' })
})