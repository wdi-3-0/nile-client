'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const purchEvents = require('./purchases/events')
const products = require('./products')

$(() => {
  authEvents.addHandlers()
  purchEvents.addHandlers()
  products.loadProducts()

  // Set sign-in only features as hidden on page load.
  $('.secured').hide()

  // Clear form fields when exiting change password modal without submit.
  $('.close-clear').on('click', (event) => {
    event.preventDefault()
    $(`form`).trigger(`reset`)
  })
})
