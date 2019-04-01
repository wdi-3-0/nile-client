'use strict'

const api = require('./api')
const cartApi = require('../purchases/api')

const addHandlers = () => {
  $('#checkout-button').on('click', openHandler)
}

// const getCartTotal = () => {
//   cartApi.getCart()
//     .then(responseData => {
//       console.log(responseData)
//       return responseData
//     })
// }

const handler = StripeCheckout.configure({
  key: 'pk_test_IlHFjvgJoAsnL6ec5Nnbgxew005EW6mYqU',
  image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
  locale: 'auto',
  token: function (token) {
    cartApi.getCart()
      .then(responseData => {
        const prices = responseData.cart.items.map(item => item.price)
        const reducer = (acc, curr) => acc + curr
        const total = prices.reduce(reducer) * 100

        const stripeData = {
          token: {
            tokenId: token.id,
            total
          }
        }

        api.createCharge(stripeData)
          .catch(console.error)
      })
  }
})

const openHandler = event => {
  event.preventDefault()

  cartApi.getCart()
    .then(responseData => {
      const prices = responseData.cart.items.map(item => item.price)
      const reducer = (acc, curr) => acc + curr
      const total = prices.reduce(reducer) * 100
      console.log(total)

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
