const express = require('express')
const indeed = require('./lib/scraper.js')
const path = require('path');

const queryOptions = {
  query: '',
  city: 'Granada, España',
  radius: '25',
  level: '',
  jobType: 'fulltime',
  maxAge: '7',
  sort: 'date',
  limit: '10'
};

indeed.query(queryOptions).then(res => {
    JobList = res; // An array of Job objects
});

const PORT = process.env.PORT || 5000


var app = express();

app.get('/', (req, res) => res.render('index'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.engine('pug', require('pug').__express);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
