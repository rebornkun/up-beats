import React, { Fragment } from 'react'

const Card = (props) => {
  return (
   <Fragment>
    <div className="bg-chill-green rounded-2xl p-8 mb-4 w-[95vw] md:w-[75vw]">
        {props.children}
    </div>
   </Fragment>
  )
}

export default Card