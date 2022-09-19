'use strict';

module.exports = (err, req, res, next) => {
  console.log('error: ' , err);
  res.status(500).send({
    err: 500,
    route: req.path,
    query: req.query,
    body: req.body,
    message: typeof(err) === 'string' ? err : `Server Error: ${err.message}`,
  });
};