import React, { memo, useEffect, useState } from 'react'
import "./../styles/Explore.css"
import FeedFilterComponent from './FeedFilterComponent'
import Post from "./Post";

const Explore=memo(()=> {

    const [searchKeyword,setSearchKeyWord] = useState("") //INITIALLY THERE IS NO SEARCH KEYWORD
    const [exploreFilter,setExploreFilter] = useState("Trending") //INITIALLY DISPLAY THE TRENDING PAGES
    const exploreFilterOptions = ["Trending","Sports","Entertainment","News"]  //ALL THE TYPES OF FILTERS APPLIED WHILE SHOWIG EXPLORE PAGES
    const [searchFilter,setSearchFilter] = useState("All") //INITIAL SEARCH RESULT WILL DISPLAY RESULT FOR ALL TYPES MATCHING THE KEYWORD
    const searchFilterTypes = ["All","People","Post","Category"]; //ALL THE TYPES OF FILTERS APPLIED WHILE SHOWING SEARCH RESULTS
    const [feedData,setFeedData] = useState([])
    
    // HANDLING LOADING AND ERROR
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false);



    const handleSearch = (e)=>{
        const searchValue = event.target.value;
        setSearchKeyWord(searchValue)
        
    }

    useEffect(()=>{

      // DEFINING  THE FETCH DATA FOR BOTH EXPLORE FEED AND SEARCH DATA

        const fetchData = async () => {
            try {
              const response = await fetch("/data/allPostData.json");
              if (!response.ok) {
                console.log("Error fetching data");
                return;
              }
              let allPostData = await response.json();
              await setIsLoading(false);

                if(!searchKeyword){
                // IF search keyword is not there then show according to EXPLORE filters;
                  allPostData = allPostData.filter(post=>post.category===exploreFilter)
                  setFeedData(allPostData)
                }
                else{ //IF SEARCH KEYWORD IS THERE THE SEARCH ACORDING TO THE SEARCH FILTER
                  allPostData = allPostData.filter(post=>{
                    if(searchFilter==="All"){
                      return JSON.stringify(post).toLowerCase().includes(searchKeyword.toLowerCase())
                    }else if(searchFilter==="People"){
                      return post.userName.toLowerCase().includes(searchKeyword.toLowerCase());
                    }else if(searchFilter === "Post"){
                      return post.postText.toLowerCase().includes(searchKeyword.toLowerCase());
                    }else if(searchFilter==="Category"){
                      return post.category.toLowerCase()===searchKeyword.toLowerCase()
                    }
                  })
                  setFeedData(allPostData)
                }
            } catch (err) {
              setIsError(err.message);
              setIsLoading(false)
            }
          };

          fetchData(); //THIS IS CALLED AT THE FIRST RERENDER TO IMMIDIATELY LOAD THE DATA
        const timeoutSearch = setTimeout(()=>{  //DEBOUNCE SEARCHING IMPLEMENTATION
            fetchData();
        }, 3000);
        

        return ()=>clearTimeout(timeoutSearch) //TO CLEAR THE TIMEOUT AFTER COMPONENT UNMOUNTING
    },[searchKeyword,searchFilter,exploreFilter])

  return (
    <div className='feed-container'>
      {/* SEARCH BAR COMPONENT */}
        <div className='search-container'>
            <i className="bi bi-search"></i>
            <input onChange={handleSearch} value={searchKeyword} type="text" name="" id="" placeholder='Search' />
        </div>

        {!searchKeyword && <FeedFilterComponent filterTypes={exploreFilterOptions} selected={exploreFilter} setSelected={setExploreFilter}/> }
        
        {isLoading && <h1 className='loader'></h1>}
        {isError && <h1>{isError}</h1>}

        {
          !isLoading && !isError &&
            searchKeyword &&  //IF SEARCHKEYWORD IS THERE THE FILTERTYPES CHAGE TO SEARCH FILTERS
            <FeedFilterComponent filterTypes={searchFilterTypes}
            selected={searchFilter} setSelected={setSearchFilter}/>
        }

        { !isLoading && !isError &&
          feedData.map(postData=>{
            return(
                <Post key={postData.postId} data={postData}/>
            )
        })}
    </div>
  )
})

export default Explore