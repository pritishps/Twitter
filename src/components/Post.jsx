import React, { useState } from 'react'
import "../styles/Post.css"

function Post({data}) {
  const [liked,setLiked] = useState(data.liked)
  const [likes,setLikes] = useState(data.likes);
  // console.log(data.userName,liked)


  const handleLike = ()=>{
    if(liked){
      setLikes(prevLikes=>prevLikes-1)
    }else{
      setLikes(prevLikes=>prevLikes+1)
    }
    setLiked(prevLiked=>!prevLiked)
  }


  return (
    <div className={`post-container`}>
        <div className='post-image-container'>
            <img src="images/profile-image/loggedin-user.png" alt="user-image" />
        </div>
        <div className={`post-content`}>
            <div className={`post-headings`}>
                <h1 className='post-user-name'>{data.userName}</h1>
                <p className='post-user-id'>@{data.userId}</p>
                <p className='post-time'>{data.time}</p>
                <p className='post-options-icon'><i className="bi bi-three-dots"></i></p>
            </div>
            <p className={`post-text`}>{data.postText}</p>
            <div className='reaction-container'>
              <p className='comment-button'><i className="bi bi-chat"></i>{data.comments}</p>
              <p className='repost-button'><i className="bi bi-repeat"></i>{data.reposts}</p>
              { !liked && <p onClick={handleLike} 
              className='like-button'><i className="bi bi-heart"></i>{likes}</p>}
              { liked && <p onClick={handleLike} className='liked-button'><i className="bi bi-heart-fill"></i>{likes }</p>}
              <p className='views-button'><i className="bi 
              bi-bar-chart-fill"></i>{data.views}</p>

            </div>
        </div>
    </div>
  )
}

export default Post