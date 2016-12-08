import html from 'yo-yo'
import header from './header'
import link from './buttons/link'

module.exports = (state, dispatch) => html`
    <div>
      ${header(state, dispatch)}
      <p>
        A scalable client side routing boilerplate for the fastest web experience
      </p>
    </div>
  `
