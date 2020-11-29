import {constants } from '../actions/constants';
import axiosInstance from '../../helpers/axios';

export const committeeFetch=()=>{
    return async (dispatch)=>{
        const popData=await axiosInstance.get('/committee/readData');
        if(popData.status===200){
            const {previous,current}=popData.data.data[0];
            dispatch({
                type:constants.COMM_FETCH,
                payload:{previous,current}
            })
        }
    }
}