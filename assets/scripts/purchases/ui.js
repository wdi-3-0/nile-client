'use strict'

const toast = require('../templates/toast')
const shoppingCartTmpl = require('../templates/cart.hbs')
const historyTmpl = require('../templates/history.hbs')

const cartSuccess = (responseData) => {
  const cartHtml = shoppingCartTmpl({ cart: responseData.cart })
  $('#shopping-cart-modal .cart-contents').html(cartHtml)
  $('#shopping-cart-modal').modal('show')
}

const cartFailure = (responseData) => {
  toast.failure('Unable to open cart')
}

const addItemSuccess = (responseData) => {
  toast.success('Item added to cart')
  $('#nav-refresh-button').trigger('click')
}

const addItemFailure = (responseData) => {
  toast.failure('Unable to add item')
}

const removeItemSuccess = (responseData) => {
  toast.success('Item removed from cart')
  $('.modal').modal('hide')
  $('#nav-refresh-button').trigger('click')
  $('#nav-cart-button').trigger('click')
}

const removeItemFailure = (responseData) => {
  toast.failure('Unable to remove item')
}

// show which products have already been added to cart
const refreshProductsSuccess = (responseData) => {
  console.log('Refreshing products from cart:', responseData)
  // check if cart exists and contains items
  if ((responseData.cart && responseData.cart.items && responseData.cart.items.length > 0)) {
    let currentItems

    if (responseData.cart.items[0]._id) {
      currentItems = responseData.cart.items.map(item => item._id)
    } else {
      currentItems = responseData.cart.items
    }

    // for each product, if in cart, add class 'added'
    $('.product').each(function () {
      const productId = $(this).data('id')
      if (currentItems.includes(productId)) {
        $(this).addClass('added')
      } else {
        $(this).removeClass('added')
      }
    })
  } else {
    // otherwise clear all products
    console.log('No items in cart')
    $('.product').removeClass('added')
  }
}

const refreshProductsFailure = (responseData) => {
  toast.failure('Unable to refresh products')
}

const historySuccess = (responseData) => {
  const purchases = responseData.purchases
  purchases.forEach(purchase => {
    const prices = purchase.items.map(item => item.price)
    const total = prices.reduce((acc, val) => acc + val)
    purchase.totalCost = total
  })

  const historyHtml = historyTmpl({ purchases: purchases })
  $('#orders-modal .order-content').html(historyHtml)
  $('#orders-modal').modal('show')
}

const historyFailure = (responseData) => {
  toast.failure('Unable to get order history')
}

module.exports = {
  cartSuccess,
  cartFailure,
  addItemSuccess,
  addItemFailure,
  removeItemSuccess,
  removeItemFailure,
  refreshProductsSuccess,
  refreshProductsFailure,
  historySuccess,
  historyFailure
}
