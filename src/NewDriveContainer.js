import NewDrive from './NewDrive';
import { connect } from 'react-redux';

function mapStateToProps(store, props) {
    return {
        driver: store.user.key,
        datetime: store.datetime,
        direction: store.direction,
    }
}

// function mergeProps(stateProps, dispatchProps, ownProps){
//     console.log(stateProps);
//     const { driver, direction, datetime } = stateProps;
//     return {
//         ...stateProps,
//         ...ownProps,
//         newDrive: (passengers, note) => dispatchProps.dispatch({
//             type: "ADD_RIDE",
//             driver,
//             riders: [],
//             datetime,
//             passengers,
//             direction,
//             note
//         })
//     }
// }

export default connect(mapStateToProps, null, null)(NewDrive)