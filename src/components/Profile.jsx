import React, { memo } from 'react'
import "./../styles/Profile.css"
import Feed from './Feed'


const Profile=memo(()=>{

    const feedfilters=["Post","Likes"]

    const filterKey={
      "Post":"userId",
      "Likes":"liked",
    }
  
    const filterCriteria = {
      "Post":"pritish_p_s",
      "Likes":true,
    }




  return (
    <div className='feed-container'>

        {/* TOP PROFILE INFO */}
        <div className='profile-top-element'>
            Pritish Prasant Sahoo
        </div>
        <div className='profile-banner-container'>
        </div>
        <img className='profile-image' src="images/profile-image/loggedin-user.png" alt="" />

        <div className='profile-details-container'>
            <h1 className='user-profile-name'>Pritish Prasant Sahoo</h1>
            <p className='profile-user-id'>@pritish_p_s</p>
            <p className='profile-user-bio'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni eius doloremque libero nesciunt facilis corrupti numquam ex, aliquam tempore ea amet tempora architecto rem consequatur et repudiandae, nam minus.
            </p>
            <p className='joining-info'><i className="bi bi-calendar3"></i> Joined November 2018</p>

            <div className='follow-info-container'>
                <p><span>51</span> Following</p>
                <p><span>5</span> Followers</p>
            </div>
        </div>
        
      <Feed feedfilters={feedfilters} filterKey={filterKey} filterCriteria ={filterCriteria} url={"data/allposts.json"}/>

    </div>
  )
})

export default Profile