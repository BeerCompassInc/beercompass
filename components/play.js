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
      <svg class="play" onclick=${goToMap} viewBox="0 0 40 40" >
        <circle style="fill:#F7BA7B;" cx="20" cy="20" r="20"/>
        <g>
        	<polygon style="fill:#000;" points="30,20 15,30 15,19 15,9.7  "/>
        </g>
      </svg>
    </div>
  `
}
