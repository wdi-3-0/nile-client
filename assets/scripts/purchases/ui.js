'use strict'

const toast = require('../templates/toast')
const shoppingCartTmpl = require('../templates/cart.hbs')

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
  const addedProductId = responseData.cart.items.slice(-1)[0]
  $('.btn-target-' + addedProductId).hide()
  toast.success('Item added to cart')
}

const addItemFailure = (responseData) => {
  toast.failure('Unable to add item')
}

const removeItemSuccess = (responseData, productId) => {
  toast.success('Item removed from cart')
  $('.btn-target-' + productId).show()
  $('.modal').modal('hide')
  $('#nav-cart-button').trigger('click')
}

const removeItemFailure = (responseData) => {
  toast.failure('Unable to remove item')
}

module.exports = {
  cartSuccess,
  cartFailure,
  addItemSuccess,
  addItemFailure,
  removeItemSuccess,
  removeItemFailure
}
