const user = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                name: action.userName,
                email: action.userEmail
                // dc_link: action.userDCLink
            }
        case 'USER_LOGGED_IN':
            return {
                name: action.name,
                email: action.email,
                key: action.key
            }
        default:
            return state;
    }
}

export default user;