import React, { memo } from 'react'
import "./../styles/PageHeadingElement.css"

const PageHeadingElement =memo(({headingName})=> {
  return (
    <div className='page-heading-element'>
        {headingName}
    </div>
  )
})

export default PageHeadingElement