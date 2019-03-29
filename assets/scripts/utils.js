'use strict'

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

module.exports = {
  isAuthenticated,
  getCurrentUserId
}
