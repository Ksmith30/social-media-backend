import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello!');
});

app.listen(8080, function () {
  console.log('Example app listening on http://localhost:8080!');
});