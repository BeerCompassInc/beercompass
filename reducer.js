module.exports = (state, action) => {
  const newState = require('clone')(state)
  const { type, payload } = action
  switch (type) {
    case 'INIT':
      return newState
    case 'CHANGE_ROUTE':
      newState.lastRoute = newState.route
      newState.route = payload
      return newState
    default:
      return newState
  }
}
