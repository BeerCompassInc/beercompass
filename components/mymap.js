import html from 'yo-yo'
import header from './header'
import button from './buttons/custom'
import link from './buttons/link'
import getMap from '../js/index'

module.exports = (state, dispatch) => {

  return html`
    <div>
      ${header(state, dispatch)}
      <h1>MAP</h1>
      <div id="mapDiv"   style="width:500px;height:500px;"></div>
      ${getMap('mapDiv')}
    </div>
  `
}
