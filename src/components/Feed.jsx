import React, { memo, useEffect, useState } from 'react'
import FeedFilterComponent from './FeedFilterComponent';
import Post from './Post';
import "./../styles/Feed.css"

const Feed =memo((props)=> {

    const {feedfilters,filterKey,filterCriteria,url} = props

    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false);
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
        await setIsLoading(false);
        if (JSON.stringify(newData) !== JSON.stringify(feedData)) {
            setFeedData(newData);
        }
        } catch (err) {
            setIsError(err.message);
            setIsLoading(false)
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