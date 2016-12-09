import html from 'yo-yo'
import header from './header'
import button from './buttons/custom'
import link from './buttons/link'
import getMap from '../services/map'

module.exports = (state, dispatch) => {
  const { route } = state
  const customClass = route == '/mymap' ? 'showMap' : 'hideMap'
  var location = {lat: -41.2966371, lng: 174.77446609999998}
  document.getElementById('mapDiv').className = customClass
  return html`
    <div>
      ${header(state, dispatch)}
      <h1>MAP</h1>
      ${getMap(document.getElementById('mapDiv'), location)}
    </div>
  `
}
