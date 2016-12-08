import html from 'yo-yo'

module.exports = (state , dispatch) => {
  const { title, route } = state
  const showMenu = route == '/' ? 'hidden' : 'menu'
  return html`
    <div>
      <h1>${title}</h1>
      <div class=${showMenu}>
        <ul>
          <li onclick=${() => { dispatch({type: 'CHANGE_ROUTE', payload: '/'}) }} >Home</li>
          <li onclick=${() => { dispatch({type: 'CHANGE_ROUTE', payload: '/play'}) }} >Play</li>
          <li onclick=${() => { dispatch({type: 'CHANGE_ROUTE', payload: '/mymap'}) }} >My Map</li>
        </ul>
      </div>
      <hr>
    </div>
`
}
