import html from 'yo-yo'
import header from './header'
import button from './buttons/custom'
import link from './buttons/link'

module.exports = (state, dispatch) => html`
    <div>
      ${header(state, dispatch)}
      ${button('back', dispatch, 'CHANGE_ROUTE', '/play')}
      <h1>MAP</h1>
    </div>
  `
