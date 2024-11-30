const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from file2 app!');
});

app.listen(3002, () => {
  console.log('Server listening on port 3000');
});