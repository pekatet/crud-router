import '../index.css';
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function PostNew () {
  const [post, setPost] = useState('');
  let navigate = useNavigate();

  function postPost (post) {
    console.log(post)
    let postObj = {
      id: 0,
      content: post
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
    setPost('');
    navigate("/", {replace:true});
  }

  const onExit = () => {
    setPost('');
    navigate("/", {replace:true});
  }

  const handleChange = ({target}) => {
    setPost(target.value);
  }

  return (
    <form className="add-form" onSubmit={submitHandle}>
      <div className="header">
        <h5> Новый пост </h5>
        <button className="btn" onClick={onExit}>x</button>
      </div>
      <textarea className="post-field" id="post" name="post" value={post} onChange={handleChange}/>
      <button className="btn" type="submit">Опубликовать</button>
    </form>
  )
}

export default PostNew;