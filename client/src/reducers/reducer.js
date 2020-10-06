import {oAuthReducer} from './oAuthReducer';
import {authReducer} from './authReducer';
import {chartsReducer} from './chartsReducer';

import { combineReducers } from 'redux';


const rootReducer=combineReducers({
    // oAuthReducer,
    chartsData:chartsReducer
},null);
export default rootReducer;