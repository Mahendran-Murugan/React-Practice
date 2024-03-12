import React from 'react'
import { useParams } from 'react-router-dom'

export const SpecificUser = () => {
    const {userId} = useParams()
  return (
    <div>The User Id is {userId}    </div>
  )
}
