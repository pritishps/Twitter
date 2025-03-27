import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../styles/NavPanel.css"
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import ModalComponent from './ModalComponent';
import NewPostHomeElement from './NewPostHomeElement';


// PERMANENT NAV PANEL FOR ALL SCEREEN SIZES
const NavPanel = memo(()=>{
  const navigate = useNavigate();
  const theme = useSelector(state=>state.theme);
  const [newPostContainer,setNewPostContainer] = useState(false);

  const dispatch = useDispatch();

  const toggleTheme = ()=>{
    dispatch({
      type:"SWITCH_THEME"
    })
  }

  const location  = useLocation();

  

  return (
    
    <>
    {/* Nav Bar Desktop and Tablet Views */}
    {/* NAVIGATION PANEL FOR DESKTOP SCREEN AND TABLET SCREEN */}
      <div className={`full-screen-side-nav-panel ${theme}`}>
        
        <div className='navigation-buttons-container'>
          <div>
            <NavLink to={"/"} className={`x-logo-top`}  > <img src={`images/logo${theme}.png`} alt="x.com logo" /> </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/'} >
             <i className={location.pathname==="/" ? 'bi bi-house-door-fill' : "bi bi-house-door"}><span>Home</span></i> 
            </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/explore'} >
            <i className={location.pathname==="/explore"?  "bi bi-search-heart-fill" : "bi bi-search"}><span>Explore</span></i>
            </NavLink>  
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/notifications'} >
            <i className={location.pathname==="/notifications"? 'bi bi-bell-fill' : "bi bi-bell"}><span>Notifications</span> </i>
            </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/messages'} >
            <i className={location.pathname==="/messages" ? "bi bi-envelope-fill":"bi bi-envelope"}><span>Messages</span> </i>
            </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/communities'} >
            <i className={location.pathname==="/communities" ? "bi bi-people-fill":"bi bi-people"}><span>Communities</span> </i>
            </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/profile'} >
            <i className={location.pathname==="/profile" ? "bi bi-person-fill":"bi bi-person"}><span>Profile</span> </i>
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
          <button onClick={()=>setNewPostContainer(true)} className={`post-button ${theme}`}>
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


      {/* New Post Hovering Button */}

      <NavLink to={"/post"} className='new-post-mobile-button'><i className="bi bi-feather"></i></NavLink>
      

      {/* Buttom Navigation panel */}

      <div  className='mobile-nav-bottom-panel'>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/'} >
            <i className={location.pathname==="/" ? 'bi bi-house-door-fill' : "bi bi-house-door"}></i> 
            </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/explore'} >
            <i className={location.pathname==="/explore"?  "bi bi-search-heart-fill" : "bi bi-search"}></i>
            </NavLink>  
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/notifications'} >
            <i className={location.pathname==="/notifications"? 'bi bi-bell-fill' : "bi bi-bell"}></i>
            </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/messages'} >
            <i className={location.pathname==="/messages" ? "bi bi-envelope-fill":"bi bi-envelope"}></i>
            </NavLink>
          </div>
          <div>
            <NavLink  className={`navigation-buttons`} to={'/communities'} >
            <i className={location.pathname==="/communities" ? "bi bi-people-fill":"bi bi-people"}></i>
            </NavLink>
          </div>
          
      </div>







      {/* NEW POST SCREEN FOR FULL SCREEN ELEMENT USING THE MODAL COMPONENT*/}
      { newPostContainer &&
        <ModalComponent onClose={() => setNewPostContainer(false)}>
        <NewPostHomeElement />
      </ModalComponent>
      }


    </>
  )
})

export default NavPanel