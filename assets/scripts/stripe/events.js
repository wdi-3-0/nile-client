'use strict'

const api = require('./api')

const addHandlers = () => {
  $('#checkout-button').on('click', openHandler)
}

const handler = StripeCheckout.configure({
  key: 'pk_test_IlHFjvgJoAsnL6ec5Nnbgxew005EW6mYqU',
  image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
  locale: 'auto',
  token: function (token) {
    const stripeData = {
      token: {
        tokenId: token.id,
        total: 400
      }
    }

    api.createCharge(stripeData)
      .then(console.log)
      .catch(console.error)
  }
})

const openHandler = event => {
  event.preventDefault()

  handler.open({
    name: 'Nile',
    description: '2 widgets',
    amount: 2000
  })
}

module.exports = {
  addHandlers
}
