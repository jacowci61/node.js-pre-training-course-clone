const express = require('express');
const app = express();

function logger(req, res, next) {
  const method = req.method;
  const url = req.url;
  console.log('LOGGER:' + `${method} ${url}`); // fill this in
  next(); 
}

function timer(req, res, next) {
  const start = Date.now();
  res.on('finish', () =>
{
    const duration = Date.now() - start
    console.log('Request took ' + `${duration}`)
});
  next();
}

function headerInjector(req, res, next) {
  res.setHeader('Custom-header','Custom header 123');
  next();
}


app.get('/', (req, res) => {
  res.send('Middleware playground');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));