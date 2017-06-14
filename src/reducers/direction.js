const setdirection = (state = initialstate, action) => {
  switch (action.type) {
    case 'SET_DIRECTION':
      return action.filter
    default:
      return state
  }
}

export default setdirection