# swagger-vue-axios
Swagger to JS &amp; Vue &amp; Axios Codegen
# Installation
```shell
npm install swagger-vue-axios axios --save-dev
```
# Generate
## Using NodeJS file
```javascript
const swaggerGen = require('swagger-vue-axios')
const jsonData = require('../api-docs.json')
const fs = require('fs')
const path = require('path')

let opt = {
  swagger: jsonData,
  moduleName: 'api',
  className: 'api'
}
const codeResult = swaggerGen(opt)
fs.writeFileSync(path.join(__dirname, '../dist/api.js'), codeResult)
```

# Generated client usage

In Vue.js main file set API domain
```javascript
import { setDomain } from './lib/api-client.js'
import { setAxiosInstance } from './lib/api-client.js'
setDomain('http://localhost:3000/api')
setAxiosInstance(axios)
```

Import API function into Vue.js component, for example to log in
```javascript
import { user_login as userLogin } from '../lib/api-client.js'

userLogin({
  credentials: {
    username: 'admin',
    password: 'admin'
  }
}).then(function (response) {
  console.log(response.data) // {id: "<token>", ttl: 1209600, created: "2017-01-01T00:00:00.000Z", userId: 1}
})
```
All requests use **axios** module with promise, for more information about that follow axios documentation 

# Links
 - [swagger-js-codegen](https://github.com/wcandillon/swagger-js-codegen)
 - [axios](https://www.npmjs.com/package/axios)

# License

[MIT](https://opensource.org/licenses/MIT)
