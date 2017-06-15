import Login from './Login';
import { connect } from 'react-redux';

function mapStateToProps(store, props) {
     return {
        user: {
            name: store.user.name,
            email: store.user.email,
            key: store.user.key
        }
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        loginUser: (key, name, email) => dispatch({
            type: "USER_LOGGED_IN",
            key,
            name,
            email
        }),
        setRides: (rides) => dispatch({
            type: "FETCH_MY_RIDES",
            rides
        }),
        setDrives: (drives) => dispatch({
            type: "FETCH_MY_DRIVES",
            drives
        }),        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)