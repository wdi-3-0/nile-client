'use strict'
const store = require('../store')
const toast = require('../templates/toast')

// Save the user info to store, reset form fields, and hide modal.
const signInSuccess = (responseData) => {
  store.user = responseData.user
  hideModal()
  // Display success message, unhide secured items and hide unsecured items.
  toast.success('Sign in successful. Welcome to Nile, ' + store.user.email)
  authRefresh()
  // update available products
  $('#nav-refresh-button').trigger('click')
}

// Used for both sign up and sign in failure. display message, then reset form fields.
const authFailure = () => {
  hideModal()
  authRefresh()
  toast.failure('Unable to log in, please check credentials and try again.')
}

// Reset form fields, and hide modal.
const changePasswordSuccess = () => {
  hideModal()
  // Display success message.
  toast.success(store.user.email + ', you have successfully updated your password.')
}

// Reset form fields, and hide modal.
const changePasswordFailure = () => {
  hideModal()
  // Display failure message.
  toast.failure(store.user.email + ', there was a problem updating your password, please try again.')
}

// Reset form fields upon sign out. Then hide signed-in auth events.
const signOutSuccess = () => {
  store.user = null
  hideModal()
  // Display success message, unhide unsecured items and hide secured items.
  toast.success('You have successfully been signed out.')
  $('#nav-refresh-button').trigger('click')
  authRefresh()
}

// Display failure message.
const signOutFailure = () => {
  // toast.failure('There seems to have been a problem signing out. Please try again.')
  // just delete the token and tell them they were signed out successfully
  toast.failure(store.user.email + ', there was a problem signing out, please try again.')
}

const authRefresh = () => {
  if (store.user && store.user.token) {
    $('.unsecured').hide()
    $('.secured').show()
  } else {
    $('.unsecured').show()
    $('.secured').hide()
  }
}

const hideModal = () => {
  $('form').trigger('reset')
  $('.modal').modal('hide')
}

module.exports = {
  signInSuccess,
  authFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  authRefresh,
  hideModal
}
