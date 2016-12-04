import html from 'yo-yo'

module.exports = ({ title }, dispatch) => html`
  <div>
    <h1>${title}</h1>
    <p class='menu' onclick=${() => { dispatch({type: 'CHANGE_ROUTE', payload: '/'}) }} >Home</p>
    <p class='menu' onclick=${() => { dispatch({type: 'CHANGE_ROUTE', payload: '/info'}) }} >Info</p>
    <hr>
  </div>
`
