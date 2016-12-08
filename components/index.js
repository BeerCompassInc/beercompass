import html from 'yo-yo'
import header from './header'
import link from './buttons/link'

module.exports = (state, dispatch) => {
  function authorizeGoogle() {
    dispatch({type: 'CHANGE_ROUTE', payload: '/play'})
  }
  function authorizeFacebook() {
    dispatch({type: 'CHANGE_ROUTE', payload: '/play'})
  }
  return html`
    <div>
      ${header(state, dispatch)}
      <img onclick=${authorizeGoogle} src="../images/g-icon.png">
      <img onclick=${authorizeFacebook} src="../images/fb-icon.png">
    </div>
  `
}
