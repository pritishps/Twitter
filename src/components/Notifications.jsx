import React, { memo, useEffect, useState } from 'react'
import "./../styles/Notifications.css"
import PageHeadingElement from './PageHeadingElement'


const Notifications =memo(()=> {

    const [feedData,setFeedData] = useState([])

      useEffect(()=>{
    
        const fetchData = async () => {

          try {
            const response = await fetch("data/notifications.json");
            if (!response.ok) {
              console.log("Error fetching data");
              return;
            }
            const newData = await response.json();
            if (JSON.stringify(newData) !== JSON.stringify(feedData)) {
              setFeedData(newData);
            }
          } catch (err) {
            console.log("Error:", err);
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

        {
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