import { types } from '../actionTypes'
import { httpRequest } from '../../config'
import qs from 'qs'
import ProgressBar from "@badrap/bar-of-progress";
import { setToast } from './ToastAction'
import axios from 'axios';

const progress =new ProgressBar({
    size:4,
    color:'blue'
})


//Get ejecutivo
export const GetEjecutivo = () => async dispatch=>{
    try{
        dispatch({type:types.GET_EJECUTIVO_START});
        progress.start()
        let token = window.localStorage.getItem('token');
        const Token =  'Token '+token;
        const response = await httpRequest.get('/ejecutivo/',{headers:{"Authorization":Token}});
        const result = response.data;
        console.log("*********jjj*** ",result)
        progress.finish()
        dispatch({type:types.GET_EJECUTIVO_SUCCESS,payload:result});

    }
    catch(err)
    {
        progress.finish()
        console.log("Error in input : -------------------------------------------------------------",err);
        dispatch({type:types.GET_EJECUTIVO_FAILED});
    }
}
//Create ejecutivo
export const CreateNewEjecutivo = (data) => async dispatch=>{

    try{
        dispatch({type:types.POST_EJECUTIVO_START});
        progress.start()
        let token = window.localStorage.getItem('token');
        const Token =  'Token '+token;
        const response = await httpRequest.post('/ejecutivo/',data,{headers:{"Authorization":Token,
        "content-type": 'multipart/form-data'
    }});
        const result = response.data;
        console.log("*********jjj*** ",result)
        progress.finish()
        dispatch({type:types.POST_EJECUTIVO_SUCCESS,payload:result});

    }
    catch(err)
    {
        progress.finish()
        console.log("Error in input : -------------------------------------------------------------",err);
        dispatch({type:types.POST_EJECUTIVO_FAILED});
    }
}

//Delete ejecutivo
export const DeleteEjecutivoRecord = (data) => async dispatch=>{
    try{
        dispatch({type:types.DELETE_EJECUTIVO_START});
        progress.start()
        let token = window.localStorage.getItem('token');
        const Token =  'Token '+token;
        const response = await axios.delete('https://cloudbitakor.com/api/1.0/ejecutivo/',{headers:{"Authorization":Token,
        "content-type": 'multipart/form-data'
    },
    data:data
},);
        const result = response.data;
        console.log("*********jjj*** ",result)
        progress.finish()
        dispatch({type:types.DELETE_EJECUTIVO_SUCCESS,payload:result});

    }
    catch(err)
    {
        progress.finish()
        console.log("Error in input : -------------------------------------------------------------",err);
        dispatch({type:types.DELETE_EJECUTIVO_FAILED});
    }
}


//Update ejecutivo
export const UpdateEjecutivoRecord = (data) => async dispatch=>{
    try{
        dispatch({type:types.UPDATE_EJECUTIVO_START});
        progress.start()
        let token = window.localStorage.getItem('token');
        const Token =  'Token '+token;
        const response = await httpRequest.patch('/ejecutivo/',data,{headers:{"Authorization":Token,
        "content-type": 'multipart/form-data'
    },
},);
        const result = response.data;
        console.log("*********jjj*** ",result)
        progress.finish()
        dispatch({type:types.UPDATE_EJECUTIVO_SUCCESS,payload:result});

    }
    catch(err)
    {
        progress.finish()
        console.log("Error in input : -------------------------------------------------------------",err);
        dispatch({type:types.UPDATE_EJECUTIVO_FAILED});
    }
}