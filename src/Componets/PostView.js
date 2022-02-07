import React, { useContext,  useState } from 'react'
import PostsContext from '../PostsContext'
import { useNavigate, useParams } from 'react-router'
import PostEdit from './PostEdit'

function PostView () {
  const posts = useContext(PostsContext).posts;
  const [isEdit, setIsEdit] = useState(false);
  const params = useParams();
    console.log('params: ', params);
    console.log('posts: ', posts);


  let post = posts.find(p => p.id.toString() === params.id);
  let navigate = useNavigate();

  console.log('post: ', post);
  const onRemove = (postId) => {
    fetch(process.env.REACT_APP_POSTS_URL+'/'+postId, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    }).then(res=> res.text())
      .then(text => console.log(text));
    navigate("/", {replace:false});
  }

  return(
    <div>
      {isEdit ? <PostEdit post = {post}/> :
        <div className='post'>
        <div className="card-title">
          <img className="avatar" src="https://i.pravatar.cc/30"/>
          Name Surname
        </div>
        <div className="card-subtitle">{new Date(post.created).toLocaleString()}</div>
        <div className='post-content'>{post.content}</div>
        <button className='btn' onClick={() => setIsEdit(true)}>Изменить</button>
        <button className='btn' onClick={() => onRemove(post.id)}>Удалить</button>
        </div>
      }
    </div>
  )
}

export default PostView;