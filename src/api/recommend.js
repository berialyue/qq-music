import axios from 'axios'

export default {
  getBannerResource() {
    return axios.get('/api/banner')
  },
  getPersonalizedResource() {
    return axios.get('/api/personalized')
  },
  getPlayList(limit, tag) {
    return axios.get('/api/top/playlist', {
      params: {
        limit: limit,
        tag: tag
      }
    })
  }
}