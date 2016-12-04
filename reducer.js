module.exports = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'INIT':
      return { ...state }
    case 'CHANGE_ROUTE':
      return { ...state, lastRoute: state.route, route: payload }
    default:
      return { ...state }
  }
}
