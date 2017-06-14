import date from './date';
import direction from './direction';
import rides from './rides';
import user from './user';
import { combineReducers } from 'redux';

const reducer = combineReducers({ 
    date, 
    direction, 
    rides, 
    user
});

export default RootReducer;