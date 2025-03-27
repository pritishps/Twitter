import React, { memo, useEffect, useState } from 'react'
import FeedFilterComponent from './FeedFilterComponent';
import Post from './Post';
import "./../styles/Feed.css"


// FEED COMPONENT TO DISPLAY ANY KIND OF FEED
const Feed =memo((props)=> {

    const {feedfilters,filterKey,filterCriteria,url} = props

    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false);
    const [selectedFeed,setSelectedFeed] = useState(feedfilters[0]);
      const [feedData,setFeedData] = useState([])
    
    useEffect(()=>{

        // DEFINING THE FETCHING DATA FUNCTION
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

        //ONLY UPDATE THE FEED IF ANY NEW DATA IS GIVEN ELSE KEEP THE SAME FEED
        if (JSON.stringify(newData) !== JSON.stringify(feedData)) {
            setIsLoading(false);
            setFeedData(newData);
        }
        } catch (err) {
            setIsError(err.message);
            setIsLoading(false)
        }
    };

    fetchData()
    const intervalId = setInterval(fetchData, 3000); //FETCH DATA IS CALLED AT EVERY 3 SECONDS TO MIMIC CONTINOUS API CALLS AND UPDATE THE FIELDS IF ANY NEW DATA IS AVAILABLE
    
    return () => {
        clearInterval(intervalId);
    };

    },[selectedFeed,feedData])
    
  return (
    <div className='feed-container-component'>
        <FeedFilterComponent filterTypes={feedfilters} selected={selectedFeed} setSelected={setSelectedFeed} />
        {props.children}
        {isLoading && <h1 className='loader'></h1>}
        {isError && <h1>{isError}</h1>}
        {!isLoading && !isError &&
            feedData.map(postData=>{
                return(
                    <Post key={postData.postId} data={postData}/>
                )
            })
        }
        {!isLoading && !isError && feedData.length===0 &&
            <h1 className='no-post-message' >No posts yet</h1>
        }
    </div>
  )
})

export default Feed