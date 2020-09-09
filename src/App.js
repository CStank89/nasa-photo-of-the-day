import React, { useState } from "react";
import "./App.css";
import axios from 'axios'
import Posts from '../conponents/post'

https://api.nasa.gov/planetary/apod?api_key=bTdwPCc2bbeitjH0BR1r1x2KLTbAyj15LK2WYfhq 


const App = () => {
  const [post, setPost] = useState()
  
  axios.get('https://api.nasa.gov/planetary/apod?api_key=bTdwPCc2bbeitjH0BR1r1x2KLTbAyj15LK2WYfhq ')
  .then(res =>{
    console.log(res.data);
  })
  .catch(error => {
    console.log(error);
  });






  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Post post={post}/>

    </div>
  );
}

export default App;
