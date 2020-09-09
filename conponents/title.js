const { useState } = require("react");
import React, { useState } from "react";
import Axios from "axios";
import axios from 'axios'

function Title(){
  
    const { title, setTitle} = useState()

    function setTitle()

    return(
        <div>
            <h1>{title}</h1>
        
        </div>
    )
}
export default Title;