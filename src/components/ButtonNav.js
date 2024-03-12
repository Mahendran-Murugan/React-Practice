import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ButtonNav = () => {
    const navigate = useNavigate() 
  return (
    <div>
        <button onClick={()=> navigate('/service')}>Go to Service</button>
        <button onClick={()=> navigate(-1)}>Go Back</button>
    </div>
  )
}
