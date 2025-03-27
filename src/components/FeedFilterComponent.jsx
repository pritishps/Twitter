import React, { memo } from 'react'
import "./../styles/FeedFilterComponent.css"


// COMPONENTS TO DISPLAY THE FILTERS AVAILBE AND UPDATE THE COMPONET AS PER USER'S SELECTION 
const FeedFilterComponent =memo(({filterTypes,selected,setSelected})=>{

    const handleFilterSelect = (filter)=>{
        setSelected(filter)
    }

  return (
    <div className='feed-filter-container'>
        {
            filterTypes.map(filter=>{
                return (
                    <div key={filter} onClick={()=>handleFilterSelect(filter)} className={`filter-type ${selected===filter? "active-filter":""}`}><p>{filter}</p></div>
                )
            })
        }
    </div>
  )
})

export default FeedFilterComponent