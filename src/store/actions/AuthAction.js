import { types } from '../actionTypes'
import { httpRequest } from '../../config'
import qs from 'qs'


export const UserLogin = (data) => async dispatch => {
    var response
    try {
        
        dispatch({type:types.LOGIN_START})
         response = await httpRequest.post('/login/', data,{
            headers: { "content-type": 'multipart/form-data' }
        })
        const result = response.data
        console.log(result)
        if(result.status === 'success'){
          
            dispatch({type:types.LOGIN_SUCCESS, payload:result})
          // console.log(result)
          
             window.localStorage.setItem('accessToken',result.data.accessToken)
             window.localStorage.setItem('refreshToken', result.data.refreshToken)
             window.localStorage.setItem('userid',  result.data._id)
            // dispatch(setToast('success', result.message))
			
            
        }
        else if(result.message){
            
            dispatch({type:types.LOGIN_FAILED})
            // dispatch(setToast('error',result.message))
			
        }
        
        
    } catch (error) {
        response = await httpRequest.post('/login/', data,{
            headers: { "content-type": 'multipart/form-data' }
        }).catch((err)=>{
            console.log(err.request.response)
        })
        dispatch({type:types.LOGIN_FAILED})
    }
   
}