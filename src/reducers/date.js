import moment from 'moment';

const datetime = (state = '', action) => {
  switch (action.type) {
    case 'SET_DATETIME':
      return moment(action.date).format('DD/MM/YYYY')
    default:
      return state
  }
}

export default datetime