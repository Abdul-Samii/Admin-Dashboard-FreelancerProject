import React, { useEffect } from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
 const Toast=(props)=>{
   console.log("yooo ",props)
   const {message} = props
   useEffect(() => {
   toast(message)
   setTimeout(() => {
     props.clearToast()
   }, 2000);

   }, []);
 
    return (
      <div>
    
        <ToastContainer  message={message} />
      </div>
    );
  }


  
export default Toast
