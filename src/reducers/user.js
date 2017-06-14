const user = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                name: action.userName,
                email: action.userEmail,
                dc_link: action.userDCLink
            }
        default:
            return state;
    }
}