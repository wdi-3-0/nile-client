'use strict'

const toast = require('../templates/toast')
const api = require('./api')
const cartApi = require('../purchases/api')

const addHandlers = () => {
  $('#checkout-button').on('click', openHandler)
}

const getCartTotal = (responseData) => {
  const prices = responseData.cart.items.map(item => item.price)
  const reducer = (acc, curr) => acc + curr
  const total = prices.reduce(reducer) * 100
  return total
}

const handler = StripeCheckout.configure({
  key: 'pk_test_IlHFjvgJoAsnL6ec5Nnbgxew005EW6mYqU',
  image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
  locale: 'auto',
  token: function (token) {
    cartApi.getCart()
      .then(responseData => {
        return getCartTotal(responseData)
      })

      .then((total) => {
        const stripeData = {
          token: {
            tokenId: token.id,
            total
          }
        }

        api.createCharge(stripeData)
          .then(cartApi.checkOut)
          .then(() => {
            $('#nav-refresh-button').click()
            $('#shopping-cart-modal').modal('hide')
            toast.success('Checkout complete, thank you for your business!')
          })
          .catch(console.error)
      })
  }
})

const openHandler = event => {
  event.preventDefault()

  cartApi.getCart()
    .then(responseData => {
      return getCartTotal(responseData)
    })
    .then((total) => {
      handler.open({
        name: 'Nile',
        description: '2 widgets',
        amount: total
      })
    })
}

module.exports = {
  addHandlers
}
