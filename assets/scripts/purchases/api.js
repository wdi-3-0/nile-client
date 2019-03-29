'use strict'

const config = require('../config')
const store = require('../store')

const getPurchaseHistory = () => {
  return $.ajax({
    url: config.apiUrl + '/purchases',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getCart = () => {
  return $.ajax({
    url: config.apiUrl + '/cart',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createCart = () => {
  return $.ajax({
    url: config.apiUrl + '/cart',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addItem = (productId) => {
  return $.ajax({
    url: `${config.apiUrl}/add-item/${productId}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const removeItem = (productId) => {
  return $.ajax({
    url: `${config.apiUrl}/remove-item/${productId}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getPurchaseHistory,
  getCart,
  createCart,
  addItem,
  removeItem
}
