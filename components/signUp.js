import html from 'yo-yo'
import header from './header'
import link from './buttons/link'

module.exports = (state, dispatch) => {
  const saveUsername = (e) => dispatch({type: 'NEW_USER_DETAILS', payload: {change: 'username', value: e.target.value}})

  const savePassword = (e) => dispatch({type: 'NEW_USER_DETAILS', payload: {change: 'password', value: e.target.value}})

  const authorizeSignUp = (e) => {
    e.preventDefault()
    dispatch({type: 'CHANGE_ROUTE', payload: '/play'})
  }

  return html`
    <div class='signUp'>
      ${header(state, dispatch)}
      <form>
        <input onchange=${(e) => saveUsername(e)} type="text" placeholder="username"/>
        <input onchange=${(e) => savePassword(e)} type="password" placeholder="password" />
        <button onclick=${(e) => authorizeSignUp(e)} type="submit">Sign Up</button>
      </form>
    </div>
  `
}
