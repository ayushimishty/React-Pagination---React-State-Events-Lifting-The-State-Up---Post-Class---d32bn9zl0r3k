import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import { Post } from './Post';
import { PostList } from './PostList';
const App = () => {
  
  return (
    <div id="main">
      <PostList />
    </div>
  )
}


export default App;
