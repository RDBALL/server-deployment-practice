'use strict';

module.exports = (err, req, res, next) => {
  res.status(500).send({
    err: 500,
    route: req.path,
    query: req.query,
    body: req.body,
    message: `Server Error: &{err.message}`,
  });
};