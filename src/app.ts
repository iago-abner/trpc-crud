import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return { message: 'Home' }
})

export default app
