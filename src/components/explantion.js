import React, { useState, useEffect } from "react";
import axios from 'axios'

import {API_KEY, BASE_URL} from '../Constants/index'

import styled, { keyframes } from 'styled-components'




const kf = keyframes`
  100%{
    opacity: 1;
  }
`


const StyledExplanation = styled.div`
  opacity: 0;
  animation: ${kf} 5s forwards;
  color: ${pr => pr.theme.primaryColor};
  padding: ${pr => pr.theme.paddingSmall};
  display: flex;
  text-align: center;
  justify-content: center;
  font-family: 'Space Mono', monospace;
  background-color: ${pr => pr.theme.secondaryColor};


  @media ${pr => pr.theme.mobileBreakpoint} {
    width: initial;
  }



`




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
        <StyledExplanation>
            <p>{explanation}</p>
        </StyledExplanation>
    )
}
export default Explantion;



  
