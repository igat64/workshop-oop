const { GeoService } = require('../lib/geo.service')

describe('GeoService', () => {
  describe('#getGeoInfo', () => {
    test('provide valid ip address', async () => {
      const beijingInfo = { city: 'Beijing' }
      const moscowInfo = { city: 'Moscow' }
      const mockApi = {
        getGeoByIp: jest.fn(async ip => (ip ? beijingInfo : moscowInfo))
      }
      const geoService = new GeoService(mockApi)
      const ip = '123.123.123.123'

      await expect(geoService.getGeoInfo(ip)).resolves.toBe(beijingInfo)
    })

    test('provide invalid ip address', async () => {
      const mockApi = {
        getGeoByIp: jest.fn(async () => {
          throw new Error('error')
        })
      }
      const geoService = new GeoService(mockApi)
      const ip = 'some string'

      await expect(geoService.getGeoInfo(ip)).rejects.toThrow('error')
    })

    test('call w/o passing an ip address', async () => {
      const minskInfo = { city: 'Minsk' }
      const moscowInfo = { city: 'Moscow' }
      const mockApi = {
        getGeoByIp: jest.fn(async ip => (ip ? minskInfo : moscowInfo))
      }
      const geoService = new GeoService(mockApi)

      await expect(geoService.getGeoInfo()).resolves.toBe(moscowInfo)
    })
  })
})
