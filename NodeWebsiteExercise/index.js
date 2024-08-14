require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT;

app.get('*', (req, res) => {
  let filePath = req.url === '/' ? 'index.html' : `${req.url}.html`;

  res.sendFile(path.join(__dirname, filePath), (err) => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});

app.listen(port, () => {
  console.log(`${process.env.EXAMPLE} Server running at http://localhost:${port}/`);
});
