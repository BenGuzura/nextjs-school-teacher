import SchoolTables from '@/components/SchoolTables'
import React from 'react'

const Schools = () => {
  return (
    <div>
       <div className="card mx-5 ">
         <div className="card-title text-center"> All Schools</div>
         <div className="card-body">
            <SchoolTables query=''/>
         </div>
        
      </div>
    </div>
  )
}

export default Schools
