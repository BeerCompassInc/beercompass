import GoogleMapsLoader from 'google-maps'

GoogleMapsLoader.KEY = 'AIzaSyDNqZpfY5wCQjq78QqttpZJ05714XxQTuI'
GoogleMapsLoader.LIBRARIES = ['geometry', 'places']

module.exports = (el) => {
  GoogleMapsLoader.load((google) => {
    new google.maps.Map(el, {
       zoom: 4,
       center: {
         lat: 40.7128,
         lng: 74.0059
       }
    })
  })
}
