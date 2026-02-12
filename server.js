const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

// Enable CORS with restricted origins
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yasinshkab.github.io', 'https://alnakhla.ly'] 
    : ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
};
app.use(cors(corsOptions));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// API endpoint to serve USD rate (proxy to external API)
app.get('/api/usd', async (req, res) => {
  try {
    const fetch = (await import('node-fetch')).default;
    const upstream = await fetch('https://cbl-proxy.alharethalalem.workers.dev/', {
      headers: { 'Accept': 'application/json', 'Cache-Control': 'no-cache' }
    });
    
    if (!upstream.ok) throw new Error(`Upstream error: ${upstream.status}`);
    const apiData = await upstream.json();
    res.json(apiData);
  } catch (error) {
    console.error('Error fetching USD rate:', error);
    res.status(500).json({ error: 'Failed to fetch USD rate' });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/usd`);
});