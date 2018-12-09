import React, { Component } from 'react';
import './IndexItem.css'

class IndexItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdown: false
    }
  }
  
  render(){
    return(
      <div className='IndexItem'>
        <div className='IndexItem-title' onClick={this.props.onClick} >
          {this.props.title}
        </div>
        <div className='IndexItem-Dropdown'/>{/*placeholder for a dropdown button*/}
      </div>
    )
  }
}

export default IndexItem