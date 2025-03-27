import React, { memo } from 'react'
import "./../styles/PageHeadingElement.css"

//UI ELEMENT TO DISPLAY HEADER IN EACH PAGE WHERE REQUIRED
const PageHeadingElement =memo(({headingName})=> {
  return (
    <div className='page-heading-element'>
        {headingName}
    </div>
  )
})

export default PageHeadingElement