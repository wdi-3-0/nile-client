'use strict'

const utils = require('../utils')
const api = require('./api')
const ui = require('./ui')

const addHandlers = () => {
  $('#nav-cart-button').on('click', showCart)
  $('.main').on('click', '.add-item button', onClickAdd)
  $('#shopping-cart-modal').on('click', '.remove-item', removeFromCart)
}

// runs when user clicks 'Add to Cart' button, whether
// or not they are logged in
const onClickAdd = (event) => {
  // check if user is logged in
  if (utils.isAuthenticated()) {
    // if logged in, add item to cart
    addToCart(event)
  } else {
    // if not, show login dialog
    $('#sign-in-modal').modal('show')
  }
}

const showCart = () => {
  api.getCart()
    .then(ui.cartSuccess)
    .catch(ui.cartFailure)
}

const addToCart = (event) => {
  const productId = $(event.target).data('id')

  // check if user has cart
  if (!api.hasCart()) {
    // if not, create cart
    api.createCart()
      .then(() => {
        api.addItem(productId)
          .then(ui.addItemSuccess)
          .catch(ui.addItemFailure)
      })
      .catch(ui.addItemFailure)
  } else {
    api.addItem(productId)
      .then(ui.addItemSuccess)
      .catch(ui.addItemFailure)
  }
}

const removeFromCart = (event) => {
  event.preventDefault()
  const productId = $(event.target).data('id')
  api.removeItem(productId)
    .then(ui.removeItemSuccess)
    .catch(ui.removeItemFailure)
}

module.exports = {
  addHandlers,
  showCart,
  addToCart,
  removeFromCart
}
