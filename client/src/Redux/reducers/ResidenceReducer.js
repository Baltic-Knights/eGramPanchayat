import { constants } from "../actions/constants";

const initState={
    applicants:{}
}

export const residenceReducer=(state=initState,action)=>{
    switch(action.type){
        case constants.APP_FETCH:
            return state={
                ...state,
                applicants:action.payload.data
            }
        default:
            return state
    }
}