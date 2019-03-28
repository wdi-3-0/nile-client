'use strict'
const store = require('../store.js')

// Display success message, save the user info to store, and reset form fields.
const signInSuccess = (responseData) => {
  store.user = responseData.user
  $(`form`).trigger(`reset`)
  console.log('sign in successful')

  $('#sign-in-modal').modal('hide')
  $('#sign-up-modal').modal('hide')

  // toast.success('Account successfully created!')
  // console.log('Sign Up Success')
}

// Used for both sign up and sign in failure. display message, then reset form fields.
const authFailure = () => {
  console.log('auth failure message')
  $(`form`).trigger(`reset`)
}

module.exports = {
  signInSuccess,
  authFailure
}
