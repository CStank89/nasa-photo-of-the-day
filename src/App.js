import React, { useState, useEffect } from "react"
import "./App.css"
import axios from 'axios'
import Title from './components/title'
import Explantion from './components/explantion'
import Date from './components/date'

// import styled, { keyframes } from './theme'


// https://api.nasa.gov/planetary/apod?api_key=bTdwPCc2bbeitjH0BR1r1x2KLTbAyj15LK2WYfhq 


import {API_KEY, BASE_URL} from './Constants/index'



// const StyledPicture = styled.div`
//     border-bottom: 2px solid white;
//     color: ${pr => pr.theme.tertiaryColor};
//     padding: ${pr => pr.theme.paddingSmall};
//     width:  60%;
//     display: flex;
//     justify-content: center;
//     background-color: ${pr => pr.theme.secondaryColor};


// `







export default function App() {
  const [ picture, setPicture] = useState()
  


  useEffect(() => {
    //this is our "side effect" our random code we want to write this will happen AFTER DOM surgery
    axios.get(`${BASE_URL}${API_KEY}`)

    .then(res => {
      setPicture(res.data.hdurl)
    })
    .catch(err =>{
  
    })


  }, []) // the Empty array [] run this code after First DOM surgery only so its not constanitly pulling new data



  
  return (
    <div className='container'>
      <h1>NASA'S DAILY PICTURE</h1>
      <Date />
      <Title />
      <img src={picture}></img>
      <Explantion />
     
    </div>
  )
}
