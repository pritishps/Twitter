import React, { useEffect } from 'react'
import PageHeadingElement from './PageHeadingElement'
import { useNavigate } from 'react-router-dom'

function WildCard() {
    const navigate = useNavigate()
    useEffect(()=>{
        // navigate("/")
    })
  return (
    <div className='feed-container'> 
        <PageHeadingElement headingName={"Error"} />
    </div>
  )
}

export default WildCard