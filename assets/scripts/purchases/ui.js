'use strict'

// const utils = require('./utils')
const toast = require('../templates/toast')
const shoppingCartTmpl = require('../templates/cart.hbs')

const cartSuccess = (responseData) => {
  const cartHtml = shoppingCartTmpl({ cart: responseData.cart })
  $('#shopping-cart-form .cart-content').html(cartHtml)
  $('#shopping-cart-modal').modal('show')
}

const cartFailure = (responseData) => {
  toast.failure('Unable to open cart')
}

module.exports = {
  cartSuccess,
  cartFailure
}
