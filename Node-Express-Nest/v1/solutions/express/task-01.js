const express = require('express');
const app = express();

// --- Middleware 1: Logger ---
// TODO: log the HTTP method and URL of every incoming request
function logger(req, res, next) {
  const method = req.method;
  const url = req.url;
  console.log('LOGGER:' + `${method} ${url}`); // fill this in
  next(); // hands off control to the next middleware — don't forget this
}

// --- Middleware 2: Timer ---
// TODO: record a start time, then after the response finishes, log how long it took
function timer(req, res, next) {
  const start = Date.now();
  res.on('finish', () =>
{
    const duration = Date.now() - start
    console.log('Request took ' + `${duration}`)
});
  // hint: res has a 'finish' event you can listen to
  next();
}

// --- Middleware 3: Custom header injector ---
// TODO: add a custom header to every outgoing response, e.g. X-Powered-By-Me
function headerInjector(req, res, next) {
  res.setHeader('Custom-header','Custom header 123');
  next();
}

// Register your middlewares here, in order:
// app.use(...)

app.get('/', (req, res) => {
  res.send('Middleware playground');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));