import {constants} from '../actions/constants';
import axiosInstance from '../../helpers/axios';

export const readApplicants=()=>{
    return async (dispatch)=>{
        const applicantData=await axiosInstance.get('residence/readApplicants');
        if(applicantData.status===200){
            const data=applicantData;
            console.log(applicantData)
            dispatch({
                type:constants.APP_FETCH,
                payload:data
            })
        }
    }
}