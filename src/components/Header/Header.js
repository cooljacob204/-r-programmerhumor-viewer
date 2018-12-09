import React from 'react';
import './Header.css'

const Header = (props) => {
  return (
    <div className='Header'>
      <div onClick={props.returnHome} style={{padding: '14px'}}>Home</div>
    </div>
  )
}

export default Header