'use strict'

const api = require('./api')
const ui = require('./ui')

const addHandlers = () => {
  $('#nav-cart-button').on('click', showCart)
  $('.main').on('click', '.add-item button', addToCart)
  $('#shopping-cart-modal').on('click', '.remove-item', removeFromCart)
}

const showCart = () => {
  api.getCart()
    .then(ui.cartSuccess)
    .catch(ui.cartFailure)
}

const addToCart = (event) => {
  const productId = $(event.target).data('id')
  api.addItem(productId)
    .then(ui.addItemSuccess)
    .catch(ui.addItemFailure)
}

const removeFromCart = (event) => {
  event.preventDefault()
  const productId = $(event.target).data('id')
  api.removeItem(productId)
    .then((responseData) => ui.removeItemSuccess(responseData, productId))
    .catch(ui.removeItemFailure)
}

module.exports = {
  addHandlers,
  showCart,
  addToCart,
  removeFromCart
}
