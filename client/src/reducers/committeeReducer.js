import {constants} from '../helpers/constants';

const initState={
    previous:{},
    current:{}
}

export const committeeReducer=(state=initState,action)=>{
    switch(action.type){
        case constants.COMM_FETCH:
            console.log(action.payload.previous)
            return state={
                ...state,
                previous:action.payload.previous,
                current:action.payload.current
            }
        default:
            return state
    }
}