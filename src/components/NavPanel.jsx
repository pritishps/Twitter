import React from 'react'
import { useSelector } from 'react-redux'
import "../styles/NavPanel.css"
import { NavLink } from 'react-router-dom';

function NavPanel() {
  const theme = useSelector(state=>state.theme);

  return (
    
    <>
      <div className={`full-screen-side-nav-panel ${theme}`}>
        
        <div className='navigation-buttons-container'>
          <div>
            <NavLink to={"/"} className={`x-logo-top`}  > <img src={`images/logo${theme}.png`} alt="x.com logo" /> </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/'} >
            <i class="bi bi-house-door-fill"><span>Home</span></i>
            </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/explore'} >
            <i className="bi bi-search"><span>Explore</span></i>
            </NavLink>  
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/notifications'} >
            <i class="bi bi-bell"><span>Notifications</span> </i>
            </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/messages'} >
            <i class="bi bi-envelope"><span>Messages</span> </i>
            </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/communities'} >
            <i class="bi bi-people"><span>Communities</span> </i>
            </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/profile'} >
            <i class="bi bi-person"><span>Profile</span> </i>
            </NavLink>
          </div>
          <button className={`post-button ${theme}`}>
            <span className='full-screen-post-text'>Post</span>
            <span className='feather-logo'><i className="bi bi-feather"></i></span>
          </button>
        </div>
        <div className={`profile-info-display-container`}>
            <img className={`loggedin-user-profile-image`} src="images/profile-image/loggedin-user.png" alt="profile image" />
            <div className={`loggedin-user-account-headings`}>
                <h2>Pritish Prasant Sahoo</h2>
                <p>@pritishps</p>
            </div>
            <div className={`navigation-container-top-menu-option`}>...</div>
        </div>

      </div>
    </>
  )
}

export default NavPanel