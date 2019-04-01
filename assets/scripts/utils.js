'use strict'

// Common utility functions

const store = require('./store')

// returns boolean value for whether token exists
const isAuthenticated = () => {
  return (store.user && store.user.token)
}

const getCurrentUserId = () => {
  return store.user.id
}

const calculateOrderTotal = (order, orderProperty = 'totalCost') => {
  const prices = order.items.map(item => item.price)
  const total = prices.reduce((acc, val) => acc + val)
  if (orderProperty !== '') {
    order[orderProperty] = total
  }
  return total
}

module.exports = {
  isAuthenticated,
  getCurrentUserId,
  calculateOrderTotal
}
