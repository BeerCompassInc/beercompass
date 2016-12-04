import html from 'yo-yo'
import header from './header'
import link from './buttons/link'

module.exports = (state, dispatch) => html`
    <div>
      ${header(state, dispatch)}
      <p>
        A scalable client side routing boilerplate made by
        ${link('bradymat', 'https://github.com/bradymat')}
        for the fastest web experience
      </p>
    </div>
  `
