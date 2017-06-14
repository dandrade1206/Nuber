import datetime from './datetime';
import direction from './direction';
import rides from './rides';
import user from './user';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ 
    datetime, 
    direction, 
    rides, 
    user
});

export default rootReducer;