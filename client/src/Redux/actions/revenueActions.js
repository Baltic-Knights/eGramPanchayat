import {constants} from '../actions/constants';
import axiosInstance from '../../helpers/axios';

export const readRevenue=()=>{
    return async (dispatch)=>{
        const revenueData=await axiosInstance.get('revenue/readData');
        if(revenueData.status===200){
            const data=revenueData;
            console.log(revenueData)
            dispatch({
                type:constants.APP_FETCH,
                payload:data
            })
        }
    }
}