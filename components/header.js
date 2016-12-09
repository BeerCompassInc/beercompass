import html from 'yo-yo'

module.exports = (state , dispatch) => {
  const { title, route, showMenu } = state
  const toggleMenu = () => dispatch({type: 'SHOW_MENU'})
  const customClass = showMenu ? 'showMenu' : 'hideMenu'
  const checkIfLoggedIn = () => route == '/' ? html`<div></div>` : html`
    <svg onclick=${toggleMenu} class='menuButton' viewBox='0 0 7 6'>
      <rect x='1' y='4.5' width='5' height='0.7' rx='0.25' ry='0.25'/>
      <rect x='1' y='1.2' width='5' height='0.7' rx='0.25' ry='0.25'/>
      <rect x='1' y='2.9' width='5' height='0.7' rx='0.25' ry='0.25'/>
    </svg>`
  const checkRouteForLogo = route == '/mymap' ? 'hideLogo' : 'showLogo'
  return html`
    <div class='header'>
      ${checkIfLoggedIn()}
      <div class='logo'>
        <img class=${checkRouteForLogo} src="https://cloud.githubusercontent.com/assets/20106637/21035471/34ff658c-be24-11e6-9874-bb9852786797.png">
        <h1>Beer Compass</h1>
      </div>
      <div class=${customClass}>
        <ul>
          <li onclick=${() => { dispatch({type: 'CHANGE_ROUTE', payload: '/'}) }} >Home</li>
          <li onclick=${() => { dispatch({type: 'CHANGE_ROUTE', payload: '/play'}) }} >Play</li>
          <li onclick=${() => { dispatch({type: 'CHANGE_ROUTE', payload: '/mymap'}) }} >My Map</li>
          <li onclick=${() => { dispatch({type: 'CHANGE_ROUTE', payload: '/'}) }} >Logout</li>

        </ul>
      </div>
    </div>
`
}
