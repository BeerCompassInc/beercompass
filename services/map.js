import GoogleMapsLoader from 'google-maps'

// GoogleMapsLoader.KEY = 'AIzaSyDNqZpfY5wCQjq78QqttpZJ05714XxQTuI'
GoogleMapsLoader.LIBRARIES = ['geometry', 'places']

module.exports = (el) => {
  GoogleMapsLoader.onload((google) => {
  })
}
