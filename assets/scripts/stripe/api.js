'use strict'

const config = require('../config')

const createCharge = (data) => {
  return $.ajax({
    url: config.apiUrl + '/charge',
    method: 'POST',
    data
  })
}

module.exports = {
  createCharge
}
