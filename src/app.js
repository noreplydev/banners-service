import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import * as dotenv from 'dotenv'

// Import routes
import rustCourse from './routes/rustCourse.js'

dotenv.config()
const app = express()

// Configure __dirname on EsModules
global.__dirname = path.dirname(fileURLToPath(import.meta.url))

// Serve static files
app.use('/public/rust-course', express.static(path.join(__dirname, '..', 'public', 'rust-course')))

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Please use /route-type/... to use the api'
  })
})

app.use('/rust-course', rustCourse)

app.listen(process.env.PORT, () => {
  console.log('Service running on http://localhost:3000')
})
