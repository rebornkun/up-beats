import React, { Fragment } from 'react'

const Card = (props) => {
  return (
   <Fragment>
    <div className=" bg-chill-green rounded-2xl py-4 px-2 mb-4">
        {props.children}
    </div>
   </Fragment>
  )
}

export default Card