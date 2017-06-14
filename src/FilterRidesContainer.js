
import FilterRides from './FilterRides'
import { connect } from 'react-redux';
import moment from 'moment';

function mapStateToProps(store, props) {
    console.log(store.datetime.date);
    return {
        datetime: {
          date: moment(store.datetime.date, 'MM/DD/YYYY').format('YYYY-MM-DD'),
          hour: store.datetime.hour,
          minute: store.datetime.minute,
          ampm: store.datetime.ampm  
        },
        direction: store.direction
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        handleSwitch: () => dispatch({
            type: "SWITCH_DIRECTION"
        }),
        processDate: (event) => dispatch({
            type: "SET_DATE",    
            newDate: event.target.value
        }),
        processHour: (event) => dispatch({
            type: "SET_HOUR",    
            newHour: event.target.selectedOptions[0].text
        }),
        processMin: (event) => dispatch({
            type: "SET_MIN",    
            newMinute: event.target.selectedOptions[0].text
        }),
        processAMPM: (event) => dispatch({
            type: "SET_AMPM",
            newAMPM: event.target.selectedOptions[0].text
        })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterRides)