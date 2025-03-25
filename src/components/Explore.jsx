import React, { useEffect, useState } from 'react'
import "./../styles/Explore.css"
import FeedFilterComponent from './FeedFilterComponent'

function Explore() {

    const [searchKeyword,setSearchKeyWord] = useState("")
    const [trendingFilter,setTrendingFilter] = useState("Trending")
    const trendingFilterOptions = ["Trending","Sports","Entertainment","News"]
    const [searchFilter,setSearchFilter] = useState("People")
    const [feedData,setFeedData] = useState([])

    const searchFilterTypes = ["People","Post","Category"];


    const handleSearch = (e)=>{
        const searchValue = event.target.value;
        setSearchKeyWord(searchValue)
        
    }

    useEffect(()=>{

        let allPostData = []
        const fetchData = async () => {
            try {
              const response = await fetch("/data/allposts.json");
              if (!response.ok) {
                console.log("Error fetching data");
                return;
              }
              allPostData = await response.json();
            //   console.log(allPostData)
                if(!searchKeyword){
                // IF search keyword is not there then show according to trending filters;
                allPostData = allPostData.filter(post=>post.category===trendingFilter)
                setFeedData(allPostData)
              }


            } catch (err) {
              console.log("Error:", err);
            }
          };

          fetchData();
        const timeoutSearch = setTimeout(()=>{
            fetchData();
        }, 3000);


        return ()=>clearTimeout(timeoutSearch)
    },[searchKeyword])

  return (
    <div className='explore-feed-container'>
        <div className='search-container'>
            <i className="bi bi-search"></i>
            <input onChange={handleSearch} value={searchKeyword} type="text" name="" id="" placeholder='Search' />
        </div>
        {!searchKeyword && <FeedFilterComponent filterTypes={trendingFilterOptions} selected={trendingFilter} setSelected={setTrendingFilter}/> }

        {
            searchKeyword && 
            <FeedFilterComponent filterTypes={searchFilterTypes}
            selected={searchFilter} setSelected={setSearchFilter}/>
        }

        {feedData.map(post=>{
            return(
                <h1>{post.postText}</h1>
            )
        })}
    </div>
  )
}

export default Explore