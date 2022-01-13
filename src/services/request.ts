/**
 * Axios Request Wrapper
 * ---------------------
 */

 import axios from 'axios';
 import { apiURL } from '../constants';
 
  /**
  * Create an Axios Client with defaults
  */
 
 const client = axios.create({
   baseURL: apiURL,
  
 });
 
 /**
  * Request Wrapper with default success/error actions
  */
 
 const request = function (options: any) {
     
   const onSuccess = function (response: any) {
     console.debug('Request Successful!', response);
     return response.data;
   };
 
   const onError = function (error: any) {
     
     if (error.response) {
       // Request was made but server responded with something
       // other than 2xx
       console.error('Status:', error.response.status);
       console.error('Data:', error.response.data);
       console.error('Headers:', error.response.headers);
       
     } 
     
     
     else {
       // Something else happened while setting up the request
       // triggered the error
       console.error('Error Message:', error.message);
     }
 
     return Promise.reject(error.response || error.message);
   };
 
   return client(options).then(onSuccess).catch(onError);
 };
 
 export default request;
 