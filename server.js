const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const zlib         = require('zlib');            

const app = express();

app.set('port', process.env.PORT || 3000);

// set up the views engine and the views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views', 'pages'));

// app security policies: default settings of helmetjs
app.use(helmet());

// compression middleware
app.use(compression({
  level: zlib.Z_BEST_COMPRESSION,
  strategy: zlib.Z_DEFAULT_STRATEGY
}));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/activities', (req, res, next) => {
  res.render('activities');
});

app.get('/careers', (req, res, next) => {
  res.render('careers');
});

app.get('/contact', (req, res, next) => {
  res.render('contact');
});

app.get('/culture', (req, res, next) => {
  res.render('culture');
});

app.get('/dinning', (req, res, next) => {
  res.render('dinning');
});

app.get('/experience', (req, res, next) => {
  res.render('experience');
});

app.get('/falcon', (req, res, next) => {
  res.render('falcon');
});

app.get('/lodges', (req, res, next) => {
  res.render('lodges');
});

app.get('/offers', (req, res, next) => {
  res.render('offers');
});

app.get('/overview', (req, res, next) => {
  res.render('overview');
});

// start the app server
app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}, on ${app.get('env')} mode`);
});