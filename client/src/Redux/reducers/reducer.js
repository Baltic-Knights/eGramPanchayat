import {oAuthReducer} from './oAuthReducer';
import {authReducer} from './authReducer';
import {chartsReducer} from './chartsReducer';
import {schemeReducer} from './schemeReducer';
import {committeeReducer} from './committeeReducer';
import {residenceReducer} from './ResidenceReducer';
import {revenueReducer} from './revenueReducer';

import { combineReducers } from 'redux';


const rootReducer=combineReducers({
    // oAuthReducer,
    chartsData:chartsReducer,
    schemes:schemeReducer,
    committee:committeeReducer,
    residence:residenceReducer,
    revenue:revenueReducer
});
export default rootReducer;