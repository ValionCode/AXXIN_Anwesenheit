const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET = process.env.SAVE_SECRET || null; // optional secret to protect write access

app.use(bodyParser.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname)));

app.post('/save', (req, res) => {
  if (SECRET) {
    const header = req.get('X-Secret') || '';
    if (header !== SECRET) {
      return res.status(403).json({ error: 'Forbidden' });
    }
  }

  const data = req.body;
  if (!Array.isArray(data)) {
    return res.status(400).json({ error: 'Expected JSON array' });
  }

  const filePath = path.join(__dirname, 'users.json');
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return res.json({ ok: true });
  } catch (err) {
    console.error('Write error', err);
    return res.status(500).json({ error: 'Write failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
