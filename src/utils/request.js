import axios from 'axios'

const request = axios.create({
  // process.env在webpack.dev.conf.js中配置
  baseURL: process.env.BASE_API,
  headers: {
    'x-taas-pid': 0
  },
  timeout: 5000
})

export default request
