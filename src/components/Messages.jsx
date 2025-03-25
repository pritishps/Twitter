import React, { useEffect,useState } from 'react'
import "./../styles/Messages.css"

function Messages() {

    const [feedData,setFeedData] = useState([])
    
    useEffect(()=>{

        const fetchData = async () => {
            try {
            const response = await fetch("data/messages.json");
            if (!response.ok) {
                console.log("Error fetching data");
                return;
            }
            const newData = await response.json();
            if (JSON.stringify(newData) !== JSON.stringify(feedData)) {
                console.log("Feed data has changed");
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

    console.log(feedData)

  return (
    <div className='feed-container'>
        <div className='top-messages-heading'>Messages</div>
        {
            feedData.map(messageData=>{
                return(
                    <div className='message-container' key={messageData.messageId}>
                        <img src="images/profile-image/loggedin-user.png" alt="user-profile-image" />
                        <div className='message-content'>
                            <div className='message-headings'>
                                <h1>{messageData.userName}</h1>
                                <p>@{messageData.userId}</p>
                                <p>{messageData.messageDate}</p>
                            </div>
                            <p>{messageData.lastMessage}</p>

                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Messages