const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  session({
    secret: keys.sessionSecret,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
    resave: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);

const PORT = process.env.PORT || 2002;
app.listen(PORT);
