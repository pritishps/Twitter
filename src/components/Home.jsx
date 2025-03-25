import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import "../styles/Home.css";
import FeedFilterComponent from './FeedFilterComponent';
import NewPostHomeElement from './NewPostHomeElement';
import Post from './Post';

function Home() {

  const theme = useSelector(state=>state.theme);
  const [selectedFeed,setSelectedFeed] = useState("For you")
  const [feedData,setFeedData] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{

    const fetchData = async () => {
      let fetchAddress = ""
      if(selectedFeed==="For you") fetchAddress = "/data/foryoufeed.json";
      else if(selectedFeed==="Feed") fetchAddress = "/data/followingfeed.json";
      try {
        const response = await fetch(fetchAddress);
        if (!response.ok) {
          console.log("Error fetching data");
          return;
        }
        const newData = await response.json();
        // console.log(newData)
        if (JSON.stringify(newData) !== JSON.stringify(feedData)) {
          console.log("Feed data has changed");
          setFeedData(newData);
          setIsLoading(false)
        }
      } catch (err) {
        console.log("Error:", err);
      }
    };

    fetchData()
    const intervalId = setInterval(fetchData, 3000);
    
    return () => {
      clearInterval(intervalId);
    };

  },[selectedFeed,feedData])

  return (
    <div className={`home-panel ${theme}`}>
      <div className='home-feed-container'>
        <FeedFilterComponent filterTypes={["For you","Feed"]} selected = {selectedFeed} setSelected ={setSelectedFeed}/>
        <NewPostHomeElement/>
        {isLoading && <h1>Loading...</h1>}
        {!isLoading && 
          feedData.map(postData=>(
            <Post key={postData.postId} data = {postData} />
          ))
        }
      </div>
    </div>

  )
}

export default Home