import html from 'yo-yo'
import header from './header'
import button from './buttons/custom'
import link from './buttons/link'

module.exports = (state, dispatch) => {
  const goToMap = () => {
    dispatch({type: 'CHANGE_ROUTE', payload: '/mymap'})
  }
  return html`
    <div>
      ${header(state, dispatch)}
      ${button('back', dispatch, 'CHANGE_ROUTE', '/')}
      <svg onclick=${goToMap} viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;">
        <circle style="fill:#EBBA16;" cx="14.5" cy="14.5" r="14.5"/>
        <g>
        	<polygon style="fill:#FFFFFF;" points="22,14.5 11,22 11,14.6 11,7  "/>

        </g>
      </svg>
    </div>
  `
}
