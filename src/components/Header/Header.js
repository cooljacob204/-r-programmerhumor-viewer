import React from 'react';
import './Header.css'

export default function Header(props){
  return (
    <div className='Header'>
      <div onClick={props.returnHome} style={{ padding: '14px', cursor: 'pointer', float: 'left'}}>/r/programmerhumor</div>
    </div>
  )
}