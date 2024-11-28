import { Loader } from 'lucide-react'
import React from 'react'

const DashboardLoading = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        <Loader className='size-10 animate-spin text-muted-foreground'/>
    </div>
  )
}

export default DashboardLoading
