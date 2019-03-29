'use strict'

const api = require('./api')
const ui = require('./ui')

const addHandlers = () => {
  $('#nav-cart-button').on('click', showCart)
  $('.main').on('click', '.add-item button', addToCart)
}

const showCart = () => {
  api.getCart()
    .then(ui.cartSuccess)
    .catch(ui.cartFailure)
}

const addToCart = (event) => {
  const productId = $(event.target).data('id')
  api.addItem(productId)
    .then()
    .catch()
}

module.exports = {
  addHandlers,
  showCart,
  addToCart
}
