import html from 'yo-yo'

module.exports = (state , dispatch) => {
  const { title, route, showMenu } = state
  const toggleMenu = () => dispatch({type: 'SHOW_MENU'})
  const customClass = showMenu ? 'showMenu' : 'hideMenu'
  return html`
    <div>
      <h1>${title}</h1>
      <button onclick=${toggleMenu}>Show</button>
      <div class=${customClass}>
        <ul>
          <p onclick=${() => { dispatch({type: 'CHANGE_ROUTE', payload: '/'}) }} >Home</p>
          <p onclick=${() => { dispatch({type: 'CHANGE_ROUTE', payload: '/play'}) }} >Play</p>
          <p onclick=${() => { dispatch({type: 'CHANGE_ROUTE', payload: '/mymap'}) }} >My Map</p>
        </ul>
      </div>
      <hr>
    </div>
`
}
