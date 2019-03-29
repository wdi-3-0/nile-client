'use strict'

require('../../../node_modules/jquery-toast-plugin/src/jquery.toast.js')
require('../../../node_modules/jquery-toast-plugin/src/jquery.toast.css')
// Common utility functions
//
// Currently utilize Bootstrap Alert styles

const store = require('../store')

// returns boolean value for whether token exists
const isAuthenticated = () => {
  return (store.user && store.user.token)
}

const getCurrentUserId = () => {
  return store.user.id
}

const userMessage = function (message, alertClass = 'info') {
  alertMessage(message, alertClass)
}

const warningMessage = function (message) {
  alertMessage(message, 'warning')
}

const successMessage = function (message) {
  alertMessage(message, 'success')
}

const failure = function () {
  errorMessage('Something went wrong, please try again.')
}

const errorMessage = function (message) {
  alertMessage(message, 'danger')
}

const alertMessage = function (message, cls = 'info', timeout = 5000) {
  const html = `<div class="alert alert-${cls} fade show" role="alert" height="80%">${message}</div>`
  $('#userMessage').html(html).alert()
  setTimeout(() => {
    $('#userMessage')
      .alert('close')
      .html('')
  }, timeout)
}

// Toast message generated with comments from "https://kamranahmed.info/toast"
// Populate toast text with specific UI action, coming from UI file.
const success = function (text) {
  $.toast({
    text: text, // Text that is to be shown in the toast
    heading: 'Success', // Optional heading to be shown on the toast
    icon: 'success', // Type of toast icon
    showHideTransition: 'slide', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'bottom-right', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#16dee5', // Background color of the toast loader
    bgColor: '#39a121    ',
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

module.exports = {
  isAuthenticated,
  getCurrentUserId,
  userMessage,
  warningMessage,
  successMessage,
  failure,
  errorMessage,
  alertMessage,
  success
}
