import React, { memo, useEffect,useState } from 'react'
import "./../styles/Messages.css"
import PageHeadingElement from './PageHeadingElement'

// MESSAGES COMPONENT
const Messages=memo(()=> {

    const [feedData,setFeedData] = useState([])
    
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false);
    
    useEffect(()=>{

        //FETCHING MESSAGE DATA
        const fetchData = async () => {
            try {
            const response = await fetch("data/messages.json");
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
        <PageHeadingElement headingName={"Messages"} />
        
        {isLoading && <h1 className='loader'></h1>}
        {isError && <h1>{isError}</h1>}

        {/* MESSAGES ARE SHOWN ONE AFTER ANOTHER IN A LONG FEED */}
        {!isLoading && !isError &&
            feedData.map(messageData=>{
                return(
                    <div className='message-container' key={messageData.messageId}>
                        <img src={messageData.userImageUrl} alt="user-profile-image" />
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
})

export default Messages