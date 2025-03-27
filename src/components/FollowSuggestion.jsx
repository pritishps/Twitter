import React from 'react'
import "./../styles/FollowSuggestion.css"
import UsersCard from './UsersCard'

// FULL SCREEN FOLLOW SUGGESTION ELEMENT, oNLY DISPLAYED IN FULL SCREEN
function FollowSuggestion() {
    //DUMMY SUGGESTIONS DIRECTLY GIVEN
    const suggestions = [
        {
            userName : "Priyanka Mohanty",
            userId : "priyanka_m",
            userImage : "./images/user-images/profile-pic/profile-6.jpg"
        },
        {
            userName : "Bruce Wayne",
            userId : "i_m_bruce",
            userImage : "./images/user-images/profile-pic/profile-2.jpg"
        },
        {
            userName : "Clark Kent",
            userId : "hope_s",
            userImage : "./images/user-images/profile-pic/profile-7.jpg"
        },
        {
            userName : "Ronda Ceill",
            userId : "r_ceill",
            userImage : "./images/user-images/profile-pic/profile-4.jpg"
        }
    ]


  return (
    <div className='follow-suggestion'>
        <h1>Who to follow</h1>

        {
            suggestions.map(user=>{
                return(
                    <UsersCard key={user.userId} user = {user}/>
                )
            })
        }
    </div>
  )
}

export default FollowSuggestion