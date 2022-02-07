import React from 'react'
import { useNavigate } from 'react-router'

function PostCard ({post}) {
  let navigate = useNavigate();
  const createdDate = new Date(post.created);
  return(
    <div className='card' onClick={() => navigate("/posts/"+post.id, {replace:false})}>
      <div className="card-body">
        <div className="card-title">
          <img className="avatar" src="https://i.pravatar.cc/30"/>
          Name Surname
        </div>
        <div className="card-subtitle">{createdDate.toLocaleString()}</div>
        <div className='card-text'>{post.content}</div>
      </div>
    </div>
  )
}

export default PostCard;