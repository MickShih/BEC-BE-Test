const express = require('express');
const createError = require('http-errors');

const passportLocal = require('./middlewares/passportLocal');
const errorHandler = require('./middlewares/errorHandler');
const passport = require('./services/passport')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.status(200).send('Hello BEC Technologies');
});

app.post('/api/auth/login', passportLocal)

app.get('/api/unhandledRejection', (req, res) => {
  throw createError();
});

app.get('/api/handledRejection', (req, res, next) => {
  next(createError(400, 'This is Handled Rejection.'));
});

app.use(errorHandler);

const server = app.listen(3000, () => {
  console.log('Listening on port 3000.');
});

module.exports = server;