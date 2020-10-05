import {oAuthReducer} from './oAuthReducer';
import { combineReducers } from 'redux';


const rootReducer=combineReducers({
    auth:oAuthReducer
});

export default rootReducer;