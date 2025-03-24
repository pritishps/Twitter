import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import "../styles/Home.css";
import FeedFilterComponent from './FeedFilterComponent';

function Home() {

  const theme = useSelector(state=>state.theme);
  const [selectedFeed,setSelectedFeed] = useState("For you")

  return (
    <div className={`home-panel ${theme}`}>
      <div className='home-feed-container'>
        <FeedFilterComponent filterTypes={["For you","Feed"]} selected = {selectedFeed} setSelected ={setSelectedFeed}/>
      </div>
    </div>

  )
}

export default Home