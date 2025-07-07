import express from 'express'
import path from 'path'
import url from 'url'

const app = express()
const PORT = 3000

const fileName = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(fileName)

app.use(express.static(path.join(__dirname, 'public')))

// Optional: cleaner /contact route without .html
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'))
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
