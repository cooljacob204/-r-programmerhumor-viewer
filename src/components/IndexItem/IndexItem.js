import React, { Component } from 'react';
import './IndexItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

class IndexItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdown: false
    }
  }

  getDropdown(){
    return (
      <FontAwesomeIcon icon={faImage} className='IndexItem-Dropdown' />/*placeholder for a dropdown button*/ 
    )
  }

  render(){
    return(
      <div className='IndexItem'>
        <div className='IndexItem-index'>{this.props.index}</div>
        <div>
          <div className='IndexItem-title' onClick={this.props.onClick} >
            {this.props.title}
          </div>
          {this.getDropdown()}
        </div>
      </div>
    )
  }
}

export default IndexItem