import html from 'yo-yo'
import header from './header'
import link from './buttons/link'

module.exports = (state, dispatch) => html
  `
    <div>
      <img src="../images/compass-icon.png">
      <h1>Beer Compass</h1>
      <a href="https://www.google.com" alt="google login oauth" title="google login"><img src="../images/g-icon.png"></a>
      <a href="https://www.facebook.com" alt="facebook login oauth" title="facebook login"><img src="../images/fb-icon.png"></a>
    </div>
  `
