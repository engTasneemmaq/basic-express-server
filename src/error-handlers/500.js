'use strict';
module.exports = (error, req, res, next) => {
  if (req.query.name === '') {
    res.status(500).send({
      code: 500,
      route: req.path,
      message: `Server Error:${error}`,
    })
  } else if (req.query.name === 'wrong Name') {
    res.status(500).send({
      code: 500,
      route: req.path,
      message: `Server Error:${error}`,
    })
  };
};