const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// console.log(path.join(path.join(__dirname, '../../dist', 'index.html')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../../dist')));

// Routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
