import React from 'react';
import axios from 'axios';
axios.defaults.baseURL ='http://localhost:1832';
// 
// axios.defaults.baseURL ='http://www.inklego.com';
export default (Com)=>{
    return function(props){
        return <Com axios={axios} {...props} ></Com>
    } 

    
}