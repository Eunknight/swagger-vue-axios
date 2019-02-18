const swaggerGen = require('../../index.js')
const fs = require('fs')
const path = require('path')
const axios = require('axios')
const url = 'http://petstore.swagger.io/v2/swagger.json'
console.log('get ', url)
axios.get(url).then(function (response) {
  let opt = {
    swagger: response.data,
    moduleName: 'api',
    className: 'api'
  }
  const codeResult = swaggerGen(opt)
  fs.writeFileSync(
    path.join(__dirname, '../dist/api.js'),
    codeResult)
}).catch(function (error) {
  console.log(error)
  throw new Error('Get' + url + ' error')
})