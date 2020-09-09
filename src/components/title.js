import React, { useState, useEffect } from "react";
import axios from 'axios'

import {API_KEY, BASE_URL} from '../Constants/index'

function Title(){
    const [ title, setTitle] = useState()
  

    useEffect(() => {
        //this is our "side effect" our random code we want to write this will happen AFTER DOM surgery
        axios.get(`${BASE_URL}${API_KEY}`)
    
        .then(res => {
          setTitle(res.data.title)
        })
        .catch(err =>{
      
        })
    
    
      }, [])
   
    return (
        <div className='container-title'>
          <h1>{title}</h1>
        </div>
      )
}
  


export default Title;