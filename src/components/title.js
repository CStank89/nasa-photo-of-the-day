import React, { useState, useEffect } from "react";
import axios from 'axios'

import {API_KEY, BASE_URL} from '../Constants/index'

import styled, { keyframes } from 'styled-components'


const kf = keyframes`
  100%{
    opacity: 1;
  }
`


const StyledTitle = styled.div`
  opacity: 0;
  animation: ${kf} 3s forwards;
  color: ${pr => pr.theme.tertiaryColor};
  padding: ${pr => pr.theme.paddingSmall};
  display: flex;
  justify-content: center;
  background-color: ${pr => pr.theme.secondaryColor};


  @media ${pr => pr.theme.mobileBreakpoint} {
    width: initial;
  }



`
  

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
      
        <StyledTitle className='container-title'>
        
          <h1>{title}</h1>
      
        </StyledTitle>
      )
}



export default Title;