import React from 'react';
import Image from '../Image/Image.js'
import TextPost from '../TextPost/TextPost.js'
import './Post.css';

const Post = (props) => {
  const isImage = props.post.url.match(/(.jpg|.gif|.jpeg|.png)$/);
  return (
    <div>
      {isImage ? (
        <Image url={props.post.url} className='Post-Image'/>
        ) : (
          props.post.text  === "" ? (
            <a href={props.post.url}>{props.post.url}</a>
          ) : (
            <TextPost text={props.post.text}/>
          )
        )
      }
    </div>
  )
}

export default Post