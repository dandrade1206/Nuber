const direction = (state = '', action) => {
    switch(action.type) {
        case 'SWITCH_DIRECTION':
            if (state === 'Franklin'){
                return 'Downtown'
            }
            return 'Franklin'
        default:
            return 'Franklin'        
    }
}

export default direction;