'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log('this is the form data')
  console.log(formData)

  api.signUp(formData)
  // Auto sign-up to sign-in.
    .then(() => { onSignUpSignIn(formData) })
    .catch(ui.authFailure)
}

// Allows for user to automatically be signed in on successful sign-up.
const onSignUpSignIn = (formData) => {
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.authFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log('this is the form data')
  console.log(formData)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.authFailure)
}

const addHandlers = () => {
  // Authorization events.
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
}

module.exports = {
  addHandlers
}
