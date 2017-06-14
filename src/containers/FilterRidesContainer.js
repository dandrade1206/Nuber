
import FilterRides from '../FilterRides'
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
    console.log(state.direction);
    return {
        datetime: (state.datetime === props.datetime),
        direction: (state.direction === props.direction)
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        onClick: () => dispatch({
            type: "SWITCH_DIRECTION"
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterRides)