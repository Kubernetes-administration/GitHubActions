const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from file3 app!!');
});

app.listen(3003, () => {
  console.log('Server listening on port 3003');
});
