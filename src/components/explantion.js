import React, { useState, useEffect } from "react";
import axios from 'axios'

import {API_KEY, BASE_URL} from '../Constants/index'

const Explantion = props => {
    const [ explanation, setExplanation ]  = useState()

    useEffect(() => {
        //this is our "side effect" our random code we want to write this will happen AFTER DOM surgery
        axios.get(`${BASE_URL}${API_KEY}`)
    
        .then(res => {
          setExplanation(res.data.explanation)
        })
        .catch(err =>{
      
        })
    
    
      }, []) // the Empty array [] run this code after First DOM surgery only so its not constanitly pulling new data
    

    return(
        <div>
            <p>{explanation}</p>
        </div>
    )
}
export default Explantion;



  
