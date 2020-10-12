import {oAuthReducer} from './oAuthReducer';
import {authReducer} from './authReducer';
import {chartsReducer} from './chartsReducer';
import {schemeReducer} from './schemeReducer';

import { combineReducers } from 'redux';


const rootReducer=combineReducers({
    // oAuthReducer,
    chartsData:chartsReducer,
    schemes:schemeReducer
});
export default rootReducer;