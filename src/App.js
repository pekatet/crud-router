import './index.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PostList from './Componets/PostList'
import PostNew from './Componets/PostNew'
import PostView from './Componets/PostView'
import PostsProvider from './PostsProvider'

function App() {
  return (
    <PostsProvider>
      <Router>
        <div className="page">
          <Routes>
            <Route path="/posts/new" element={<PostNew/>} />
            <Route path="/posts/:id" element={<PostView/>}/>
            <Route path="/" element={<PostList/>} />
          </Routes>
        </div>
      </Router>
    </PostsProvider>
  );
}

export default App;