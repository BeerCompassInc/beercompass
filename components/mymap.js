import html from 'yo-yo'
import header from './header'
import button from './buttons/custom'
import link from './buttons/link'
import GoogleMapsLoader from 'google-maps' // only for common js environments

module.exports = (state, dispatch) => {



  GoogleMapsLoader.load(function(google) {
      new google.maps.Map(
        GoogleMapsLoader.KEY = 'AIzaSyDNqZpfY5wCQjq78QqttpZJ05714XxQTuI'

      )
      GoogleMapsLoader.LIBRARIES = [{
       zoom: 4,
       center: {lat: 34, lng: -40.605}
     }]

  })


  return html`
    <div>
      ${header(state, dispatch)}
      ${button('back', dispatch, 'CHANGE_ROUTE', '/play')}
      <h1>MAP</h1>
      <div id="map"></div>
    </div>
  `
}
