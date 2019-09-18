import React, { useState } from 'react';
import './IndexItem.css'
import TextPost from '../TextPost/TextPost.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faAlignLeft } from '@fortawesome/free-solid-svg-icons'

export default function IndexIte(props) {
  const [dropdown, setDropdown] = useState(false);

  const isImage = props.url.match(/(.jpg|.gif|.jpeg|.png)$/)

  function setDropdownOnclick() {
    setDropdown(!dropdown)
  }

  function getDropdown(){
    if (dropdown){
      if (isImage){
        return(
          <img src={props.url} alt={props.url} className='IndexItem-dropdown-image' />
        )
      }
    if (props.text){
      return (<TextPost text={props.text} className='IndexItem-dropdown-text' />)
    }
      return (<TextPost text={props.url} className='IndexItem-dropdown-text' />)
    }
  }

  function getPreview(){
    if (isImage)
      return (<img src={props.thumbnail} alt={props.url} className='IndexItem-preview' />)
    
    return(<FontAwesomeIcon icon={faAlignLeft} className='IndexItem-preview' />)
  }

  return(
    <div className='IndexItem'>
      <div className='IndexItem-index'>{props.index + 1}</div>
      {getPreview()}
      <div className='IndexItem-right'>
        <div className='IndexItem-title'>
          <a href={props.url} className='IndexItem-title-span'>
            {props.title}
          </a>
        </div>
        <div className='IndexItem-bottom'>
          <FontAwesomeIcon icon={faImage} className='IndexItem-dropdown-button' onClick={() => setDropdownOnclick()} />
          <div className='IndexItem-info'>
            <div className='IndexItem-author'>submitted by {props.author}</div>
            <a href={"https://reddit.com" + props.comments} className='IndexItem-info-text'>comments</a>
          </div>
        </div>
        {getDropdown()}
      </div>
    </div>
  )
}


