const GoogleMapsLoader = require('google-maps')

GoogleMapsLoader.KEY = 'AIzaSyDNqZpfY5wCQjq78QqttpZJ05714XxQTuI'

function getMap (el, location) {
  GoogleMapsLoader.onload(function (google) {
    new google.maps.Map(el, {
      zoom: 4,
      position: location
    })
  })
}

module.exports = getMap
