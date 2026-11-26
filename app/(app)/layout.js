import Navbar from '@/components/Navbar'
import React from 'react'

const AppLayout = ({ children }) => {
  return (
    <div className='w-full min-h-screen'>
        <Navbar />
        <main className='w-full min-h-full pt-15'>{children}</main>
    </div>
  )
}

export default AppLayout