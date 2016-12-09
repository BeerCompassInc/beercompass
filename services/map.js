import GoogleMapsLoader from 'google-maps'

GoogleMapsLoader.KEY = 'AIzaSyDNqZpfY5wCQjq78QqttpZJ05714XxQTuI'
GoogleMapsLoader.REGION = 'GB'

module.exports = (el) => {
  GoogleMapsLoader.load(function(google) {

      new google.maps.Map(el, {
             zoom: 8,
             center: {lat: 40.7128, lng: 74.0059}
           })
      console.log(google.maps)
  })
}
