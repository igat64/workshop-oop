const request = require('axios')

class ApiService {
  constructor () {
    this.baseUrl = 'http://ip-api.com'
  }

  async getGeoByIp (ip = '') {
    const uri = `${this.baseUrl}/json/${ip}`
    const { data } = await request.get(uri)
    return data
  }
}

module.exports = { ApiService }
