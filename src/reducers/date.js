const timedate = (state = initialstate, action) => {
  switch (action.type) {
    case 'FORMAT_TIMEDATE':
      return [
                ...state,
                moment(formatDate).format('DD/MM/YYYY')
            ]
    default:
      return state
  }
}

export default timedate