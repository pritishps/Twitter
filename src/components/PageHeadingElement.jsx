import React from 'react'
import "./../styles/PageHeadingElement.css"

function PageHeadingElement({headingName}) {
  return (
    <div className='page-heading-element'>
        {headingName}
    </div>
  )
}

export default PageHeadingElement