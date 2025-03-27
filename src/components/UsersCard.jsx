import React from 'react'

// USER CARD UI COMPONENTS USED TO SHOW SUGGESTIONS
function UsersCard({user}) {
    const {userName,userId,userImage} =  user

  return (
    <div className='user-card-container'>
        <div>
            <img src={userImage} alt="" />
            <div>
                <h1>{userName}</h1>
                <p>@{userId}</p>
            </div>
        </div>
        <button className='follow-button'>Follow</button>
    </div>
  )
}

export default UsersCard