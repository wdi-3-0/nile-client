'use strict'
const store = require('../store.js')
const toast = require('../templates/utils.js')

// Save the user info to store, reset form fields, and hide modal.
const signInSuccess = (responseData) => {
  store.user = responseData.user
  $(`form`).trigger(`reset`)
  $('#sign-in-modal').modal('hide')
  $('#sign-up-modal').modal('hide')
  // Display success message.
  toast.success('Sign in successful. Welcome to Nile, ' + store.user.email)
}

// Used for both sign up and sign in failure. display message, then reset form fields.
const authFailure = () => {
  console.log('auth failure message')
  $(`form`).trigger(`reset`)
}

// Reset form fields, and hide modal.
const changePasswordSuccess = () => {
  $(`form`).trigger(`reset`)
  $('#change-password-modal').modal('hide')
  // Display success message.
  toast.success(store.user.email + ', you have successfully updated your password.')
}

// Reset form fields, and hide modal.
const changePasswordFailure = () => {
  $(`form`).trigger(`reset`)
  $('#change-password-modal').modal('hide')
  // Display failure message.
  toast.success(store.user.email + ', there was a problem updating your password, please try again.')
}

module.exports = {
  signInSuccess,
  authFailure,
  changePasswordSuccess,
  changePasswordFailure
}
