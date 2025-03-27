import React, { memo } from 'react'
import { useSelector } from 'react-redux';
import "../styles/Home.css";
import NewPostHomeElement from './NewPostHomeElement';
import Feed from './Feed';

//HOME ELEMENT
const Home=memo(()=>{

  const theme = useSelector(state=>state.theme);


  const feedfilters=["For you","Feed"]

  const filterKey={
    "For you":"category",
    "Feed" :"isFollowing"
  }
  
  const filterCriteria = {
    "For you":"For you",
    "Feed" :true
   
  }

  return (
    <div className={`home-panel ${theme}`}>
      <div className='feed-container'>
      <Feed feedfilters={feedfilters} filterKey={filterKey} filterCriteria ={filterCriteria} url={"data/allPostData.json"}>
      {/* NEW POST ELEMET IS PASSED AS A CHILD PROPS TO RENDER BETWEEN THE TOP FILTERS AND THE POSTS FEED */}
        <NewPostHomeElement/>
      </Feed>
      </div>
    </div>

  )
})

export default Home