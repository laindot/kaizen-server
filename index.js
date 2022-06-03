const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'epale sobrino' });
});

const PORT = process.env.PORT || 2002;
app.listen(PORT);
