'use strict'

const config = require('./config')
const productTmpl = require('./templates/product.hbs')
const toast = require('./templates/toast')
const utils = require('./utils')

const loadProducts = () => {
  $.ajax({
    url: config.apiUrl + '/products'
  }).then(showProducts)
    .catch(() => {
      toast.failure('Unable to load products')
    })
}

const showProducts = (responseData) => {
  const products = utils.formatProductNames(responseData.products)
  const productsHtml = productTmpl({ products: products })
  $('.main').html(productsHtml)
}

module.exports = {
  loadProducts,
  showProducts
}
