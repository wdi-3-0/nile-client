'use strict'

const config = require('../config')

const getPurchaseHistory = () => {
  return $.ajax({
    url: config.apiUrl + '/purchases',
    method: 'GET'
  })
}

const getCart = () => {
  return $.ajax({
    url: config.apiUrl + '/cart',
    method: 'GET'
  })
}

const createCart = () => {
  return $.ajax({
    url: config.apiUrl + '/cart',
    method: 'POST'
  })
}

const addItem = (productId) => {
  return $.ajax({
    url: config.apiUrl + '/add-item/' + productId,
    method: 'PATCH'
  })
}

module.exports = {
  getPurchaseHistory,
  getCart,
  createCart,
  addItem
}
