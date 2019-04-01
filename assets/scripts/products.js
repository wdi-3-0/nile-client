'use strict'

const config = require('./config')
const productTmpl = require('./templates/product.hbs')
const toast = require('./templates/toast')

const loadProducts = () => {
  $.ajax({
    url: config.apiUrl + '/products'
  }).then(showProducts)
    .catch(() => {
      toast.failure('Unable to load products')
    })
}

const showProducts = (responseData) => {
  const productsHtml = productTmpl({ products: responseData.products })
  $('.main').html(productsHtml)
}

module.exports = {
  loadProducts,
  showProducts
}
