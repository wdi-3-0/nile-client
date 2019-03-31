'use strict'

const utils = require('../utils')
const api = require('./api')
const ui = require('./ui')

const addHandlers = () => {
  $('#nav-cart-button').on('click', showCart)
  $('#nav-orders-button').on('click', showHistory)
  $('.main').on('click', '.add-item button', onClickAdd)
  $('#shopping-cart-modal').on('click', '.remove-item', removeFromCart)
  $('#shopping-cart-form').on('submit', onCheckout)
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

const showHistory = () => {
  api.getPurchaseHistory()
    .then(ui.historySuccess)
    .catch(ui.historyFailure)
}

const addToCart = (event) => {
  const productId = $(event.target).data('id')

  // check if user has cart
  api.getCart()
    .then((responseData) => {
      if (responseData.cart) {
        addItem(productId)
      } else {
        api.createCart()
          .then(() => {
            addItem(productId)
          }).catch(ui.addItemFailure)
      }
    }).catch(ui.addItemFailure)
}

const addItem = (productId) => {
  api.addItem(productId)
    .then(ui.addItemSuccess)
    .catch(ui.addItemFailure)
}

const removeFromCart = (event) => {
  event.preventDefault()
  const productId = $(event.target).data('id')
  api.removeItem(productId)
    .then(ui.removeItemSuccess)
    .catch(ui.removeItemFailure)
}

const onCheckout = (event) => {
  event.preventDefault()

  console.log('Checkout submitted')
  // TODO: process order
}

module.exports = {
  addHandlers,
  showCart,
  addToCart,
  removeFromCart
}
