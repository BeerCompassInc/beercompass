import html from 'yo-yo'
import header from './header'
import link from './buttons/link'

module.exports = (state, dispatch) => {

  const goToSignUp = () => dispatch({type: 'CHANGE_ROUTE', payload: '/signUp'})

  const saveUsername = (e) => dispatch({type: 'UPDATE_LOGIN_DETAILS', payload: {change: 'username', value: e.target.value}})

  const savePassword = (e) => dispatch({type: 'UPDATE_LOGIN_DETAILS', payload: {change: 'password', value: e.target.value}})

  const login = (e) => {
    e.preventDefault()
    dispatch({type: 'CHANGE_ROUTE', payload: '/play'})
}

  return html`
    <div class='login'>
      ${header(state, dispatch)}
      <form>
        <input onchange=${(e) => saveUsername(e) } type="text" placeholder="username"/>
        <input onchange=${(e) => savePassword(e) } type="password" placeholder="password" />
        <button onclick=${(e) => login(e)} type="submit">Login</button>
      </form>
      <button onclick=${goToSignUp}>Create Account</button>
    </div>
  `
}
