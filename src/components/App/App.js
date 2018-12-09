import React, { Component } from 'react';
import './App.css';
import Post from '../Post/Post.js'
import IndexItem from '../IndexItem/IndexItem.js'
import Header from '../Header/Header.js'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      posts: [],
      currentPost: null
    }
  }

  componentDidMount(){
    fetch('https://www.reddit.com/r/programmerhumor.json')
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        const posts = data.data.children.map(child => {
          return ({
            title: child.data.title,
            text: child.data.selftext,
            url: child.data.url
          })
        })
        this.setState({
          posts: posts
        })
      })
  }

  handleOnClick(post){
    this.setState({
      currentPost: post
    })
  }

  returnHome(){
    this.setState({
      currentPost: null
    })
  }

  render() {
    return(
    <div className='App'>
      <Header returnHome={() => this.returnHome()}/>
      {
        this.state.currentPost ?
          (
              <Post post={this.state.currentPost}/>
          ) : (
          <div>{
            this.state.posts.map((post, index) => {
              return(
                <IndexItem 
                  key={index} 
                  index={index}
                  onClick={event => this.handleOnClick(post)} 
                  title={post.title}
                  />
              )
            })}
          </div> )
      }
    </div>
    )
  } 
}

export default App;
