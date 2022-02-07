import React, { useEffect, useState } from 'react'
import PostsContext from './PostsContext'

export default function PostsProvider(props) {
  const [posts, setPosts] = useState(undefined);
  const [intId, setIntId] = useState(0);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_POSTS_URL);
        if (!response.ok){
          throw new Error(response.statusText);
        }
        const posts = await response.json();
        setPosts(posts);
      } catch (e) {
        console.error(e);
      }
      setIntId(setTimeout(fetchPosts, 5*1000));
    };
    fetchPosts();
    return () => {
      clearTimeout(intId);
    }
  }, []);
  return (
    <div>
      { posts  &&
        <PostsContext.Provider value={{ posts, setPosts }}>
          {props.children}
        </PostsContext.Provider>
      }
      </div>
  )
}
