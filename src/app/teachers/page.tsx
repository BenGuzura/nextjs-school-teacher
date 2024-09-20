import TeahersTable from '@/components/TeahersTable'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="card mx-80 ">
         <div className="card-title text-center"> All Schools</div>
         <div className="card-body">
            <TeahersTable query='' />
         </div>
        
      </div>
    </div>
  )
}

export default page
