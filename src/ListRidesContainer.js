import ListRides from './ListRides';
import { connect } from 'react-redux';
import moment from 'moment'

function mapStatetoProps(store, props) {
    return {
        rides: store.rides,
        user: store.user.key
    }
}

 export default connect(mapStatetoProps, null)(ListRides)