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
      <svg class="svg" onclick=${goToMap} viewBox="0 0 40 40" >
        <circle style="fill:#EBBA16;" cx="20" cy="20" r="20"/>
        <g>
        	<polygon style="fill:#FFFFFF;" points="30,20 15,30 15,19 15,9.7  "/>
        </g>
      </svg>
    </div>
  `
}
