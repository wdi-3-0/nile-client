'use strict'

const config = require('./config')
const productTmpl = require('./templates/product.hbs')

const loadProducts = () => {
  $.ajax({
    url: config.apiUrl + '/products'
  }).then(showProducts)
    .catch(console.log)
}

const showProducts = (responseData) => {
  const productsHtml = productTmpl({ products: responseData.products })
  $('.main').html(productsHtml)
}

const productsError = (err) => {
  console.log(err)
}

module.exports = {
  loadProducts,
  showProducts,
  productsError
}
