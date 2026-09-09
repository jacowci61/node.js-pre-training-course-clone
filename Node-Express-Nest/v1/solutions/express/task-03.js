const express = require('express');
const app = express();

app.get('/users/:id/broken-example', (req, res) => {
  const err = new Error('User not found');
  err.status = 404;
  throw err;
});

app.get('/broken-no-status', (req, res) => {
  throw new Error('Something went wrong');
});

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  const fallback_statuscode_value = 500
  res.status(err.status || fallback_statuscode_value).json({
    status: err.status || fallback_statuscode_value,
    message: err.message || "Unknown error",
    timestamp: Date.now()
  })
}

app.use(errorHandler);

const PORT = 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));