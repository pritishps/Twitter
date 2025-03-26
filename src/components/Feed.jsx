import React, { useEffect, useState } from 'react'
import FeedFilterComponent from './FeedFilterComponent';
import Post from './Post';
import "./../styles/Feed.css"

function Feed(post) {

    // POST DETAILS: 
    const {feedfilters,filterKey,filterCriteria,url} = post

    const [selectedFeed,setSelectedFeed] = useState(feedfilters[0]);
      const [feedData,setFeedData] = useState([])
    
    useEffect(()=>{

    const fetchData = async () => {
        try {
        const response = await fetch(url);
        if (!response.ok) {
            console.log("Error fetching data");
            return;
        }
        let newData = await response.json();
        newData = newData.filter(dataItem=>{
            return(
                dataItem[filterKey[selectedFeed]] === filterCriteria[selectedFeed]
            )
        })
        if (JSON.stringify(newData) !== JSON.stringify(feedData)) {
            console.log("Feed data has changed");
            
            setFeedData(newData);
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
    <div className='feed-container-component'>
        <FeedFilterComponent filterTypes={feedfilters} selected={selectedFeed} setSelected={setSelectedFeed} />
        {feedData.map(postData=>{
            return(
                <Post key={postData.postId} data={postData}/>
            )
        })}
    </div>
  )
}

export default Feed