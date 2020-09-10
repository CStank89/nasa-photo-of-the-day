import React, { useState, useEffect } from "react";
import axios from 'axios'

import {API_KEY, BASE_URL} from '../Constants/index'

import styled, { keyframes } from 'styled-components'


const kf = keyframes`
  100%{
    opacity: 1;
  }
`

const StyledDate = styled.div`
  color: ${pr => pr.theme.primaryColor};
  padding: ${pr => pr.theme.paddingSmall};
  display: flex;
  justify-content: center;
  background-color: ${pr => pr.theme.secondaryColor}

`





function Date(){
    const [ date, setDate] = useState()
  

    useEffect(() => {
        //this is our "side effect" our random code we want to write this will happen AFTER DOM surgery
        axios.get(`${BASE_URL}${API_KEY}`)
    
        .then(res => {
          setDate(res.data.date)
        })
        .catch(err =>{
      
        })
    
    
      }, [])
      
      return (
        <StyledDate className='container-title'>
          <h2>{date}</h2>
        </StyledDate>
      )
}


export default Date;