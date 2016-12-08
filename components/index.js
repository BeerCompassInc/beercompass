import html from 'yo-yo'
import header from './header'
import link from './buttons/link'

module.exports = (state, dispatch) => {
  function goToSignUp() {
    dispatch({type: 'CHANGE_ROUTE', payload: '/signUp'})
  }

  function saveUsername(e) {
    dispatch({type: 'UPDATE_LOGIN_DETAILS', payload: {change: 'username', value: e.target.value}})
  }

  function savePassword() {
    dispatch({type: 'UPDATE_LOGIN_DETAILS', payload: {change: 'password', value: e.target.value}})
  }
  console.log(state.loginDetails);
  return html`
    <div class='login'>
      ${header(state, dispatch)}
      <form>
        <input onchange=${(e) => saveUsername(e) } type="text" placeholder="username"/>
        <input onchange=${savePassword} type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
      <button onclick=${goToSignUp}>Create Account</button>
    </div>
  `
}
