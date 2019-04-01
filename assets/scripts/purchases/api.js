'use strict'

const config = require('../config')
const store = require('../store')

// get user's past purchases
const getPurchaseHistory = () => {
  return $.ajax({
    url: config.apiUrl + '/purchases',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// get user's cart
const getCart = () => {
  return $.ajax({
    url: config.apiUrl + '/cart',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// create new cart
const createCart = () => {
  return $.ajax({
    url: config.apiUrl + '/cart',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// add item to cart
const addItem = (productId) => {
  return $.ajax({
    url: `${config.apiUrl}/add-item/${productId}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// remove item from cart
const removeItem = (productId) => {
  return $.ajax({
    url: `${config.apiUrl}/remove-item/${productId}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// process payment, etc
const checkOut = () => {
  return $.ajax({
    url: `${config.apiUrl}/checkout`,
    method: 'PATCH',
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
  removeItem,
  checkOut
}
