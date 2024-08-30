import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayouts = () => {
  return (
    <div>
        <div className="grid-background"></div>
      <Outlet/>
    </div>
  )
}

export default AppLayouts