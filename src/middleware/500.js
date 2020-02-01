'use strict';

/**
 *exporting response status 500 error
 *
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = (err, req, res, next) => {
  let error = { error: err };
  res.status(500).json(error).end();
};