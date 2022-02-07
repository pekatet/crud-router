import React from 'react'

const PostsContext = React.createContext({
  posts: [],
  setPosts: () => {}
});
export default PostsContext;