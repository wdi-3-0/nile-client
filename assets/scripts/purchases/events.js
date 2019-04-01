'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

// Purchase Event Handlers
const addHandlers = () => {
  $('#nav-cart-button').on('click', showCart)
  $('.main').on('click', '.add-item button', addToCart)
  $('#nav-orders-button').on('click', showHistory)
  $('#nav-refresh-button').on('click', refreshProducts)
  $('#shopping-cart-modal').on('click', '.remove-item', removeFromCart)
  $('#order-content').on('click', 'button.view-details', viewHistoryDetails)
}

// Display shopping cart
const showCart = () => {
  api.getCart()
    .then(ui.cartSuccess)
    .catch(ui.cartFailure)
}

// Display order history
const showHistory = () => {
  api.getPurchaseHistory()
    .then(ui.historySuccess)
    .catch(ui.historyFailure)
}

// Add item to cart
const addToCart = (event) => {
  if (store.user) {
    const productId = $(event.target).data('id')
    api.addItem(productId)
      .then(ui.addItemSuccess)
      .catch(ui.addItemFailure)
  } else {
    $('#nav-sign-in-button').click()
  }
}

// refresh available products to prevent double order
const refreshProducts = () => {
  console.log('Refreshing products')
  if (store.user) {
    api.getCart()
      .then(ui.refreshProductsSuccess)
      .catch(ui.refreshProductsFailure)
  } else {
    $('.product').removeClass('added')
  }
}

// remove item from cart
const removeFromCart = (event) => {
  event.preventDefault()
  const productId = $(event.target).data('id')
  api.removeItem(productId)
    .then(ui.removeItemSuccess)
    .catch(ui.removeItemFailure)
}

// expand history details
const viewHistoryDetails = (event) => {
  $('.order-detail').toggleClass('expand')
}

module.exports = {
  addHandlers,
  showCart,
  addToCart,
  refreshProducts,
  removeFromCart,
  viewHistoryDetails
}
