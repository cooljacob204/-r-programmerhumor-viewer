import React, { Component } from 'react';
import './App.css';
import Post from '../Post/Post.js'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      posts: [],
      currentPost: null
    }
  }

  componentDidMount(){
    fetch('https://www.reddit.com/r/programminghumor.json')
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
    {
      this.state.currentPost ?
        (
            <Post post={this.state.currentPost} returnHome={() => this.returnHome()}/>
        ) : (
        <div>{
          this.state.posts.map((post, index) => {
            return(
              <div key={index} onClick={event => this.handleOnClick(post)}>
                {post.title}
              </div>
            )
          })}
        </div> )
    }
    </div>
    )
  } 
}

export default App;
