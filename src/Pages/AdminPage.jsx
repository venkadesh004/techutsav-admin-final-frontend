import React from 'react'

import Data from '../components/Data'
import Button from "@mui/material/Button"

const AdminPage = () => {
  return (
    <div className='h-screen overflow-hidden'>
      <div className={`w-full h-[50px] flex items-center p-10 justify-between`}>
        <h1 className={`text-2xl font-bold`}>ADMIN PANEL</h1>
        <Button variant='contained'>Download Data</Button>
      </div>
      <Data />
    </div>
  )
}

export default AdminPage