const ride = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_RIDE':
            return {
                driver: action.driverid,
                riders: [],
                datetime: action.datetime,
                passengers: action.passengers,
                direction: action.direction,
                note: action.note
            };
        case 'RESERVE':
            if (ride.id !== action.id){
                return state;
            }

            return {
                ...state,
                riders: [...state.riders, action.rider]
            }
        case 'CANCEL':
            if (ride.id !== action.id){
                return state;
            }

            let tempRiders = [...state.riders]
            tempRiders.splice(action.riderid, 1);
            
            return {
                ...state,
                riders: tempRiders
            }
        default:
            return state;
    }
}

const rides = (state = [], action) => {
    switch (action.type) {
        case 'ADD_RIDE':
            return [
                ...state,
                ride(undefined, action)
            ]
        case 'DELETE_RIDE':
            let tempRides = [...state];
            tempRides.splice(action.id,1);
            return tempRides;
        case 'RESERVE': // same as Cancel
        case 'CANCEL':
            return state.map(r => ride(r, action))
        default:
            return state;
    }
}