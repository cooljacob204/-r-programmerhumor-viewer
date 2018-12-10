import React, { Component } from 'react';
import './IndexItem.css'
import TextPost from '../TextPost/TextPost.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faAlignLeft } from '@fortawesome/free-solid-svg-icons'

class IndexItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdown: false,
      isImage: this.props.url.match(/(.jpg|.gif|.jpeg|.png)$/)
    }

  }

  setDropdown(){
    this.setState({
      dropdown: !this.state.dropdown
    })
  }

  getDropdown(){
    if (this.state.dropdown){
      if (this.state.isImage){
        return(
          <img src={this.props.url} alt={this.props.url} className='IndexItem-dropdown-image' />
        )
      }
    if (this.props.text){
      return (<TextPost text={this.props.text} className='IndexItem-dropdown-text' />)
    }
      return (<TextPost text={this.props.url} className='IndexItem-dropdown-text' />)
    }
  }

  getPreview(){
    if (this.state.isImage)
      return (<img src={this.props.thumbnail} alt={this.props.url} className='IndexItem-preview' />)
    
    return(<FontAwesomeIcon icon={faAlignLeft} className='IndexItem-preview' />)
  }

  render(){
    return(
      <div className='IndexItem'>
        <div className='IndexItem-index'>{this.props.index + 1}</div>
        {this.getPreview()}
        <div className='IndexItem-right'>
          <div className='IndexItem-title'>
            <a href={this.props.url} className='IndexItem-title-span'>
              {this.props.title}
            </a>
          </div>
          <div className='IndexItem-bottom'>
            <FontAwesomeIcon icon={faImage} className='IndexItem-dropdown-button' onClick={() => this.setDropdown()} />
            <div className='IndexItem-info'>
              <div className='IndexItem-author'>submitted by {this.props.author}</div>
              <a href={"https://reddit.com" + this.props.comments} className='IndexItem-info-text'>comments</a>
            </div>
          </div>
          {this.getDropdown()}
        </div>
      </div>
    )
  }
}

export default IndexItem