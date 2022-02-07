import '../index.css';
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function PostEdit ({post}) {
  console.log('post before edit: ', post);
  const [postContent, setPostContent] = useState(post.content);
  console.log(post);
  let navigate = useNavigate();

  function postPost (post) {
    console.log(post)
    let postObj = {
      id: post.id,
      content: postContent
    }
    let jsonString = JSON.stringify(postObj);
    fetch(process.env.REACT_APP_POSTS_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: jsonString
    }).then(res=> res.text())
      .then(text => console.log(text))
  }

  function submitHandle (e) {
    e.preventDefault();
    postPost(post);
    navigate("/", {replace:true});
  }

  const onExit = () => {
    setPostContent('');
    navigate("/", {replace:true});
  }

  const handleChange = ({target}) => {
    setPostContent(target.value);
  }

  return (
    <form className="add-form" onSubmit={submitHandle}>
      <span className="header">
        <h5>Новый пост</h5>
        <button className="btn" onClick={onExit}>x</button>
      </span>
      <textarea className="post-field" id="post" name="post" value={postContent} onChange={handleChange}/>
      <button className="btn" type="submit">Сохранить</button>
    </form>
  )
}

export default PostEdit;