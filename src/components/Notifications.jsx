import React, { memo, useEffect, useState } from 'react'
import "./../styles/Notifications.css"
import PageHeadingElement from './PageHeadingElement'

// NOTIFICATION COMPONENT TO DISPLAY ALL THE NOTIFICATIONS
const Notifications =memo(()=> {

    const [feedData,setFeedData] = useState([])

    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false);

      useEffect(()=>{
    
        // FETCHES THE NOTIFICATION DATA FROM JSON
        const fetchData = async () => {

          try {
            const response = await fetch("data/notifications.json");
            if (!response.ok) {
              console.log("Error fetching data");
              return;
            }
            const newData = await response.json();
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
        const intervalId = setInterval(fetchData, 5000);
        
        return () => {
          clearInterval(intervalId);
        };
    
      },[feedData])


  return (
    <div className='feed-container'>
      <PageHeadingElement headingName={"Notifications"} />

      {isLoading && <h1 className='loader'></h1>}
      {isError && <h1>{isError}</h1>}
      
        { !isLoading && !isError &&
            feedData.map(notification=>{
                return(
                    <div className='notification-container' key={notification.notificationId}>
                        <img src="images/notification-x-logo.png" alt="user-image" />
                        <p>{notification.notificationContent}</p>
                    </div>
                )
            })
        }
        
    </div>
  )
})

export default Notifications