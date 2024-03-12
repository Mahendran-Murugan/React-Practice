import React from 'react'
import { NestedRoutes } from './NestedRoutes'
import { Outlet } from 'react-router-dom'

export const Product = () => {
  return (
    <div>
        <NestedRoutes/>
        <Outlet/>
    </div>
  )
}
