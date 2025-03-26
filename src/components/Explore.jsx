import React, { useEffect, useState } from 'react'
import "./../styles/Explore.css"
import FeedFilterComponent from './FeedFilterComponent'
import Post from "./Post";

function Explore() {

    const [searchKeyword,setSearchKeyWord] = useState("")
    const [exploreFilter,setExploreFilter] = useState("Trending")
    const exploreFilterOptions = ["Trending","Sports","Entertainment","News"]
    const [searchFilter,setSearchFilter] = useState("All")
    const [feedData,setFeedData] = useState([])

    const searchFilterTypes = ["All","People","Post","Category"];


    const handleSearch = (e)=>{
        const searchValue = event.target.value;
        setSearchKeyWord(searchValue)
        
    }

    useEffect(()=>{

        let allPostData = []
        const fetchData = async () => {
            try {
              const response = await fetch("/data/allPostData.json");
              if (!response.ok) {
                console.log("Error fetching data");
                return;
              }
              allPostData = await response.json();
            //   console.log(allPostData)
                if(!searchKeyword){
                // IF search keyword is not there then show according to trending filters;
                  allPostData = allPostData.filter(post=>post.category===exploreFilter)
                  setFeedData(allPostData)
                }
                else{
                  allPostData = allPostData.filter(post=>{
                    if(searchFilter==="All"){
                      return JSON.stringify(post).toLowerCase().includes(searchKeyword.toLowerCase())
                    }else if(searchFilter==="People"){
                      return post.userName.toLowerCase().includes(searchKeyword.toLowerCase());
                    }else if(searchFilter === "Post"){
                      return post.postText.toLowerCase().includes(searchKeyword.toLowerCase());
                    }else if(searchFilter==="Category"){
                      return post.category.toLowerCase()===searchFilter.toLowerCase()
                    }
                  })
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
    },[searchKeyword,searchFilter,exploreFilter])

  return (
    <div className='feed-container'>
        <div className='search-container'>
            <i className="bi bi-search"></i>
            <input onChange={handleSearch} value={searchKeyword} type="text" name="" id="" placeholder='Search' />
        </div>
        {!searchKeyword && <FeedFilterComponent filterTypes={exploreFilterOptions} selected={exploreFilter} setSelected={setExploreFilter}/> }

        {
            searchKeyword && 
            <FeedFilterComponent filterTypes={searchFilterTypes}
            selected={searchFilter} setSelected={setSearchFilter}/>
        }

        {feedData.map(postData=>{
            return(
                <Post key={postData.postId} data={postData}/>
            )
        })}
    </div>
  )
}

export default Explore