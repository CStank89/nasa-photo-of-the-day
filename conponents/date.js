import React, { useState } from "react";
import axios from 'axios'


function Date(){
    const[date, setDate] = useState()

    return(
        <div>
            <h4>{date}</h4>
        </div>
    )
}
export default Date;