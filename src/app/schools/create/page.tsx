import AddSchoolForm from '@/components/AddSchool';
import type { type } from 'os';
import path from 'path';
import React from 'react'


const AddSchool = () => {

    

    return (
        <center>
            <div className='card w-96 flex flex-col text-center my-6'>
                <div className="card-title text-center"> Add School</div>

                    <AddSchoolForm />

            </div>
        </center>
    )
}

export default AddSchool
