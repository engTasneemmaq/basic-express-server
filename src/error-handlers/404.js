'use strict';
module.exports = (req, res, next) => {
  if (req.method !== 'GET') {
    res.status(404).send({
      code: 404,
      method: req.method,
      message: "page not found",
    });
  } else if(req.path !== '/person/:name') {
    res.status(404).send({
      code: 404,
      route: req.path,
      message: "page not found",
    });
  }
};