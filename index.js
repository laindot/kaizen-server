const express = require('express');
require('./services/passport');

const app = express();

require('./routes/auth')(app);

const PORT = process.env.PORT || 2002;
app.listen(PORT);
