const express = require('express')
const indeed = require('./lib/scraper.js')

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

var JobList

indeed.query(queryOptions).then(res => {
    JobList = res; // An array of Job objects
});

const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) => res.send("Hola Martita"))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
