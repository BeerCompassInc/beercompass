const GoogleMapsLoader = require('google-maps')




function getMap(el){
  console.log('element', el);

  GoogleMapsLoader.KEY = 'AIzaSyDNqZpfY5wCQjq78QqttpZJ05714XxQTuI'
  GoogleMapsLoader.load(function(google) {
      new google.maps.Map(el, {
             zoom: 4,
             center: {lat: 34, lng: -40.605}
           })
      console.log(google.maps)
  })
}

module.exports = getMap

//
// GoogleMapsLoader.KEY = 'AIzaSyDNqZpfY5wCQjq78QqttpZJ05714XxQTuI'
//
//
//   GoogleMapsLoader.load(function(google) {
//       new google.maps.Map(document.querySelector('main'), {
//              zoom: 4,
//              center: {lat: 34, lng: -40.605}
//            })
//       console.log(google.maps)
//   })
