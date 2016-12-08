import html from 'yo-yo'
import header from './header'
import button from './buttons/custom'
import link from './buttons/link'

module.exports = (state, dispatch) => html`
    <div>
      ${header(state, dispatch)}
      ${button('back', dispatch, 'CHANGE_ROUTE', '/')}
      <h3>Technologies used</h3>
      <p>${link('yo-yo', 'https://www.npmjs.com/package/yo-yo')}</p>
      <p>${link('sheet-router', 'https://www.npmjs.com/package/sheet-router')}</p>
      <p>${link('redux', 'https://www.npmjs.com/package/redux')}</p>
      ${button('lemon', dispatch, 'CHANGE_ROUTE', '/lemon')}
    </div>
  `
