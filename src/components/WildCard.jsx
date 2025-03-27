import React, { useEffect } from 'react'
import PageHeadingElement from './PageHeadingElement'
import { useNavigate } from 'react-router-dom'

function WildCard() {
    const navigate = useNavigate()
    useEffect(()=>{
        navigate("/") //NAVIGATES TO HOME PAGE IF TRIES TO ACCESS AN UNDEFINED ROUTE
    })
  return (
    <div className='feed-container'> 
        <PageHeadingElement headingName={"Error"} />  //FALLBACK IN CASE NAVIGATE DOESNOT WORKS
    </div>
  )
}

export default WildCard