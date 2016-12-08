import html from 'yo-yo'
import header from './header'
import button from './buttons/custom'
import link from './buttons/link'
import request from 'superagent'

module.exports = (state, dispatch) => {

  request
    .get('https://maps.googleapis.com/maps/api/js?key=AIzaSyDNqZpfY5wCQjq78QqttpZJ05714XxQTuI&callback=initMap')
    .end((err, res) => {
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        })
      }
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
