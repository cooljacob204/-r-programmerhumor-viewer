import React from 'react';
import Image from '../Image/Image.js'

const Post = (props) => {
  const isImage = props.post.url.match(/(.jpg|.gif|.jpeg|.png)$/);

  return (
    <div>
      {isImage ? (
        <Image url={props.post.url}/>
        ) : (
          props.post.text
        )
      }
      <div onClick={props.returnHome}>Back</div>
    </div>
  )
}

export default Post