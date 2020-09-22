import axios from 'axios'

const api = axios.create({
  baseURL: 'http://locahost:3333'
})

export default api