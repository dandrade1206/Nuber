import date from './date';
import direction from './direction';
import rides from './rides';
import user from './user';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ 
    date, 
    direction, 
    rides, 
    user
});

export default rootReducer;