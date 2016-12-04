module.exports = (state, { type, payload }) => {
  switch (type) {
    case 'CHANGE_ROUTE':
      return { ...state, lastRoute: state.route, route: payload }
    default:
      return { ...state }
  }
}
