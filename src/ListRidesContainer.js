import ListRides from './ListRides';
import { connect } from 'react-redux';
import moment from 'moment'

function mapStatetoProps(store, props) {
    return {
        rides: store.rides
    }
}
function mapDispatchToProps(dispatch, props) {
    return {}
}
 export default connect(mapStatetoProps, mapDispatchToProps)(ListRides)