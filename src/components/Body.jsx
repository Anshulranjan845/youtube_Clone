import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Body = () => {
  return (
    <>
    <Header />
    <div className="grid grid-flow-col">
      <div className="col-span-2">
      <Sidebar />
      </div>
      <div className="col-span-10">
  
      <Outlet />
      </div>
      </div>
      </>
  )
}

export default Body
