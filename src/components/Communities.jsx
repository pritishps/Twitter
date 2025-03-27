import React, { memo } from 'react'
import PageHeadingElement from './PageHeadingElement'
import Feed from './Feed'

// COMMUNITIES COMPONENT

const Communities=memo(()=> {


  const feedfilters=["Music","Sports","Science","News"]

  const filterKey={
    "Music":"category",
    "Sports" :"category",
    "Science" : "category",
    "News":"category"
  }

  const filterCriteria = {
    "Music":"Music",
    "Sports" :"Sports",
    "Science" : "Science",
    "News":"News"
  }

  return (
    <div className='feed-container'>
      <PageHeadingElement headingName={"Communities"} />
      <Feed feedfilters={feedfilters} filterKey={filterKey} filterCriteria ={filterCriteria} url={"data/allPostData.json"}/>
      
    </div>
  )
})

export default Communities