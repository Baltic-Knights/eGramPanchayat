import {constants } from '../helpers/constants';
import axiosInstance from '../helpers/axios';

export const committeeFetch=()=>{
    return async (dispatch)=>{
        const popData=await axiosInstance.get('/committee/readData');
        if(popData.status===200){
            const {previous,current}=popData.data.data[0];
            console.log(previous,current)
            dispatch({
                type:constants.COMM_FETCH,
                payload:{previous,current}
            })
        }
    }
}