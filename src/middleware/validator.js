'use strict';
function validator() {
  return (req, res, next) => {
    let regx = /^[a-zA-Z]+$/;
    if (regx.test(req.query.name)) {
      next();
    }
    else if (req.query.name === "") {
      req.query.name = "";
      next('The name is required');
    }
    else if (!regx.test(req.query.name)) {
      req.query.name = "wrong Name";
      next('The name should be a string');
    }
  }
}
module.exports = validator;