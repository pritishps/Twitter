import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../styles/NavPanel.css"
import { NavLink, useNavigate } from 'react-router-dom';

const NavPanel = memo(()=>{
  const navigate = useNavigate();
  const theme = useSelector(state=>state.theme);
  const dispatch = useDispatch();

  const toggleTheme = ()=>{
    dispatch({
      type:"SWITCH_THEME"
    })
  }

  return (
    
    <>
    {/* Nav Bar Desktop and Tablet Views */}
      <div className={`full-screen-side-nav-panel ${theme}`}>
        
        <div className='navigation-buttons-container'>
          <div>
            <NavLink to={"/"} className={`x-logo-top`}  > <img src={`images/logo${theme}.png`} alt="x.com logo" /> </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/'} >
            <i className="bi bi-house-door-fill"><span>Home</span></i>
            </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/explore'} >
            <i className="bi bi-search"><span>Explore</span></i>
            </NavLink>  
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/notifications'} >
            <i className="bi bi-bell"><span>Notifications</span> </i>
            </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/messages'} >
            <i className="bi bi-envelope"><span>Messages</span> </i>
            </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/communities'} >
            <i className="bi bi-people"><span>Communities</span> </i>
            </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/profile'} >
            <i className="bi bi-person"><span>Profile</span> </i>
            </NavLink>
          </div>
          <div>
            <NavLink className={`navigation-buttons`} onClick={toggleTheme}>
              {
                theme!="dark" ? <i className="bi bi-moon-stars"><span>Dark Mode</span></i>
                : <i className="bi bi-brightness-high"><span>Light Mode</span></i>
              }
            </NavLink>
          </div>
          <button className={`post-button ${theme}`}>
            <span className='full-screen-post-text'>Post</span>
            <span className='feather-logo'><i className="bi bi-feather"></i></span>
          </button>
        </div>
        <NavLink className={`profile-info-display-container`} to={"/profile"}>
            <img className={`loggedin-user-profile-image`} src="images/profile-image/loggedin-user.png" alt="profile image" />
            <div className={`loggedin-user-account-headings`}>
                <h2>Pritish Prasant Sahoo</h2>
                <p>@pritishps</p>
            </div>
            <div className={`navigation-container-top-menu-option`}>...</div>
        </NavLink>

      </div>

      {/* Mobile View */}
      {/* TOP Navigation panel */}
      <div className='mobile-nav-top-panel'>
          <img onClick={()=>navigate("/profile")} className={`loggedin-user-profile-image`} src="images/profile-image/loggedin-user.png" alt="profile image" />
          <div>
            <NavLink to={"/"} className={`x-logo-top x-logo-top-mobile`}  > <img src={`images/logo${theme}.png`} alt="x.com logo" /> </NavLink>
          </div>
          <div className={`navigation-container-top-menu-option mobile-triple-dot`}>
              {
                theme!="dark" ? <i onClick={toggleTheme} className="bi bi-moon-stars"></i>
                : <i onClick={toggleTheme} className="bi bi-brightness-high"></i>
              }
          </div>
      </div>

      {/* Buttom Navigation panel */}

      <div  className='mobile-nav-bottom-panel'>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/'} >
            <i className="bi bi-house-door-fill"></i>
            </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/explore'} >
            <i className="bi bi-search"></i>
            </NavLink>  
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/notifications'} >
            <i className="bi bi-bell"></i>
            </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/messages'} >
            <i className="bi bi-envelope"></i>
            </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/communities'} >
            <i className="bi bi-people"></i>
            </NavLink>
          </div>
          
      </div>
    </>
  )
})

export default NavPanel