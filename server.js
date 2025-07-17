import express from 'express';
import path from 'path';
import url from 'url';
import axios from 'axios';

// Express App
const app = express();
const PORT = 3000;

// Handle __dirname in ES modules
const fileName = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileName);

// Middleware to serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// ======== Routes ===================

// GET / → Serve homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// GET /contact → Serve contact page
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// GET /api/fun-fact → Fetch from Useless Facts API
app.get('/api/fun-fact', async (req, res) => {
  try {
    const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
    const factText = response.data.text;
    res.json({ fact: factText });
  } catch (error) {
    console.error('Error fetching fun fact:', error.message);
    res.status(500).json({ error: 'Could not fetch fun fact' });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
