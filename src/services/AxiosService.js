import Axios from 'axios'

export const api = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/gifts',
  timeout: 8000
})

export const giphyApi = Axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs/search',
  timeout: 8000,
  params: {
    api_key: 'l3rlqAI167Jr7JYzLRtWyrgFWtt8Ys3s'
  }
})
