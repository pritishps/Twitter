import React, { memo, useState } from 'react'
import "../styles/Post.css"

const Post=memo(({data})=>{
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
            <img src={data.url} alt="user-image" />

        </div>
        <div className={`post-content`}>
            <div className={`post-headings`}>
                <h1 className='post-user-name'>{data.userName}</h1>
                <div>
                  <p className='post-user-id'>@{data.userId}</p>
                  <p className='post-time'>{data.time}</p>
                  <p className='post-options-icon'><i className="bi bi-three-dots"></i></p>
                </div>
            </div>
            <p className={`post-text`}>{data.postText}
              { data.postImageUrl &&
                <img className='post-image' src={data.postImageUrl} alt="" />
              }
            </p>
            <div className='reaction-container'>
              <p className='comment-button'><i className="bi bi-chat"></i>{data.comments}</p>
              <p className='repost-button'><i className="bi bi-repeat"></i>{data.reposts}</p>
              { !liked && <p onClick={handleLike} 
              className='like-button'><i className="bi bi-heart"></i>{likes}</p>}
              { liked && <p onClick={handleLike} className='liked-button'><i className="bi bi-heart-fill"></i>{likes }</p>}
              <p className='views-button'><i className="bi 
              bi-bar-chart-fill"></i>{data.views}</p>
              <p><i  className="comment-button bi bi-bookmark"></i> <i className="comment-button bi bi-upload"></i> </p>

            </div>
        </div>
    </div>
  )
})

export default Post