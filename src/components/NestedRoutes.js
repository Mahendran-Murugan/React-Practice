import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const NestedRoutes = () => {
  return (
    <div>
        <Link to = "most">Most Viewed</Link>
        <Link to = 'trending'>Trending</Link>
    </div>
  )
}
