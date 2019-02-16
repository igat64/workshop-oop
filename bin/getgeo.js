#!/usr/bin/env node
const { GeoService } = require('../lib')

const ip = process.argv[2]

const geo = new GeoService()

geo
  .getGeoInfo(ip)
  .then(result => console.log(result))
  .catch(error => console.error(error))
