import {oAuthReducer} from './oAuthReducer';
import {authReducer} from './authReducer';
import {chartsReducer} from './chartsReducer';
import {schemeReducer} from './schemeReducer';
import {committeeReducer} from './committeeReducer';
import {residenceReducer} from './ResidenceReducer';

import { combineReducers } from 'redux';


const rootReducer=combineReducers({
    // oAuthReducer,
    chartsData:chartsReducer,
    schemes:schemeReducer,
    committee:committeeReducer,
    residence:residenceReducer
});
export default rootReducer;