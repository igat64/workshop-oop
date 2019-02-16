const { ApiService } = require('./api.service')

class GeoService {
  constructor (api = new ApiService()) {
    this.api = api
  }

  async getGeoInfo (ip) {
    return await this.api.getGeoByIp(ip)
  }
}

module.exports = { GeoService }
