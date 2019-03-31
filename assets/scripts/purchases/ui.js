'use strict'

const toast = require('../templates/toast')
const shoppingCartTmpl = require('../templates/cart.hbs')
const historyTmpl = require('../templates/history.hbs')

const cartSuccess = (responseData) => {
  // console.log(responseData)
  const cartHtml = shoppingCartTmpl({ cart: responseData.cart })
  $('#shopping-cart-modal .cart-contents').html(cartHtml)
  $('#shopping-cart-modal').modal('show')
}

const cartFailure = (responseData) => {
  toast.failure('Unable to open cart')
}

const addItemSuccess = (responseData) => {
  toast.success('Item added to cart')
}

const addItemFailure = (responseData) => {
  toast.failure('Unable to add item')
}

const removeItemSuccess = (responseData) => {
  toast.success('Item removed from cart')
  $('.modal').modal('hide')
  $('#nav-cart-button').trigger('click')
}

const removeItemFailure = (responseData) => {
  toast.failure('Unable to remove item')
}

const historySuccess = (responseData) => {
  const historyHtml = historyTmpl({ purchases: responseData.purchases })
  $('#orders-modal .order-content').html = historyHtml
  $('#orders-modal').modal('show')
}

const historyFailure = (responseData) => {
  toast.failure('Unable to show purchase history')
}

const checkoutSuccess = (responseData) => {
  // TODO: process order
  toast.success('Checkout successful!')
}

const checkoutFailure = (responseData) => {
  toast.failure('Unable to process order')
}

module.exports = {
  cartSuccess,
  cartFailure,
  addItemSuccess,
  addItemFailure,
  removeItemSuccess,
  removeItemFailure,
  historySuccess,
  historyFailure,
  checkoutSuccess,
  checkoutFailure
}
