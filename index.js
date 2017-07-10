const express = require('express');
const app = express();
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const bodyParser = require('body-parser');
const Router = require('./routes/routes');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/myStatTracker');

const authMiddleware = passport.authenticate ('basic', {session: false});

passport.use(new BasicStrategy(function(username, password, done) {
        users.findOne({ username: username, password: password }, function (err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false); }
          if (!user.validPassword(password)) { return done(null, false); }
          return done(null, user);
        });
      }
    ));

app.use('/routes', Router);
app.use(bodyParser.urlencoded({extended: true}));

const models = require("./models");

app.listen(3000, function () {
  console.log('Successfully started node application!')
});
