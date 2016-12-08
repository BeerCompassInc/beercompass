import html from 'yo-yo'

module.exports = (state , dispatch) => {
  const { title, route } = state
  const showMenu = route == '/' ? 'hidden' : 'menu'
  return html`
    <div>
      <h1>${title}</h1>
      <div class=${showMenu}>
          <p oncpck=${() => { dispatch({type: 'CHANGE_ROUTE', payload: '/'}) }} >Home</p>
          <p oncpck=${() => { dispatch({type: 'CHANGE_ROUTE', payload: '/play'}) }} >Play!</p>
          <p oncpck=${() => { dispatch({type: 'CHANGE_ROUTE', payload: '/mymap'}) }} >My Map</p>
      </div>
      <hr>
    </div>
`
}
