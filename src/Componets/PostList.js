import '../index.css'
import React, { useContext, useEffect} from 'react'
import PostCard from './PostCard'
import { Link } from 'react-router-dom'
import PostsContext from '../PostsContext'

function PostList () {
  const {posts, setPosts} = useContext(PostsContext);
  console.log(posts);

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
    };
    fetchPosts();
  }, []);

  return(
    <div>
      <Link className="btn"  to="/posts/new">Создать пост</Link>
      <div className="posts-list">
        {posts
          .sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()).reverse()
          .map(post => <PostCard key={post.id} post={post}/>)}
      </div>
    </div>
  )
}

export default PostList;