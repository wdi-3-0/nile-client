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

const formatDate = (date) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${month}/${day}/${year}`
}

const formatProductNames = (products) => {
  products.forEach(product => {
    const name = product.name
    if (name.includes(' by ')) {
      const parts = name.split(' by ')
      product.title = parts[0]
      product.author = parts[1]
    }
  })
  return products
}

module.exports = {
  isAuthenticated,
  getCurrentUserId,
  calculateOrderTotal,
  formatDate,
  formatProductNames
}
