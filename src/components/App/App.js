import React, { useState, useEffect } from 'react';
import './App.css';
import Post from '../Post/Post.js'
import IndexItem from '../IndexItem/IndexItem.js'
import Header from '../Header/Header.js'

export default function App(props) {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    document.title = "/r/programmerhumor"
    fetch('https://www.reddit.com/r/programmerhumor.json')
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        const posts = data.data.children.map(child => {
          return ({
            title: child.data.title,
            text: child.data.selftext,
            url: child.data.url,
            author: child.data.author,
            thumbnail: child.data.thumbnail,
            comments: child.data.permalink,
          })
        })
        updatePosts(posts)
      })
  }, []);

  function updatePosts(posts){
    setPosts(posts)
  }

  function updateCurrentPost(post) {
    setCurrentPost(post)
  }

  function handleOnClick(post){
    updateCurrentPost(post)
  }

  function returnHome(){
    updateCurrentPost(null)
  }

  return(
    <div className='App'>
    <Header returnHome={() => returnHome()}/>
    {
      currentPost ?
        (
            <Post post={currentPost}/>
        ) : (
        <div>{
          posts.map((post, index) => {
            return(
              <IndexItem 
                key={index} 
                index={index}
                onClick={() => handleOnClick(post)} 
                title={post.title}
                author={post.author}
                thumbnail={post.thumbnail}
                url={post.url}
                text={post.text}
                comments={post.comments}
                />
            )
          })}
        </div> )
    }
  </div>
  )
} 

