import React, { useState } from 'react';
import axios from 'axios'
import Title from '../conponents/title'
import Date from '../conponents/date'
import Hdurl from '../conponents/picture'
import Explantion from '../conponents/explantion'



const Post = props =>{
    const { post } = useState()



    return (
        <div>
            <Title title = {post.title} />
            <Date date={post.date}/>
            <Hdurl hdurl={post.HDurl} />
            <Explantion explanation={post.explantion}/>

        </div>
    )
}
export default Post;