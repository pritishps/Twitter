import React, { useEffect, useState } from 'react'
import "./../styles/Notifications.css"

function Notifications() {

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
            // console.log(newData)
            if (JSON.stringify(newData) !== JSON.stringify(feedData)) {
              console.log("Feed data has changed");
              setFeedData(newData);
            //   setIsLoading(false)
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

    //   console.log(feedData)

  return (
    <div className='feed-container'>
        <div className='top-notification-heading'>Notifications</div>
        {
            feedData.map(notification=>{
                return(
                    <div className='notification-container' key={notification.notificationId}>
                        <img src="images/logodark.png" alt="user-image" />
                        <p>{notification.notificationContent}</p>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default Notifications