import moment from 'moment';


const datetime = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DATE': 
      return {
        ...state,
        date: moment(action.newDate).format('MM/DD/YYYY')
      }
    case 'SET_HOUR':
      return {
        ...state,
        hour: action.newHour
      }
    case 'SET_MIN':
      return {
        ...state,
        minute: action.newMinute
      }
    case 'SET_AMPM':
      return {
        ...state,
        AMPM: action.newAMPM
      }
    default:
      return state
  }
}

export default datetime