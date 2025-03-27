import React, { memo, useRef } from 'react'
import "./../styles/NewPostHomeElement.css"


// NEW POST ELEMENT USED FOR FULL SCREEN HOME SCREEN NEW POST AND MODAL NEW POST AND MOBILE VIEW AS WELL
const NewPostHomeElement=memo(()=>{

  const postRef = useRef();

  const handlePost = ()=>{
    const postElement = postRef.current.innerHTML;
    postRef.current.innerHTML = ""
  }

  return (
    <div className='new-post-container'>
        <img className='new-post-profile-icon' src="images\profile-image\loggedin-user.png" alt="user-image" />
      <div className='new-post-action-container'>
        <p ref={postRef} className='editable-paragraph' contentEditable="true" ></p>
        <div className='post-buttons-container'>
          <div className='post-attachment-container'>
          <i className="bi bi-image"></i>
          <i className="bi bi-filetype-gif"></i>
          <i className="bi bi-emoji-smile"></i>
          </div>
          <button onClick={handlePost} className='post-button new-post-button '>Post</button>
        </div>
      </div>
    </div>
  )
})

export default NewPostHomeElement