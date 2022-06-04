const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const session = require('express-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  session({
    keys: [keys.cookieKey],
    secret: keys.cookieSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      secure: false, // this should be true only when you don't want to show it for security reason
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);

const PORT = process.env.PORT || 2002;
app.listen(PORT);
