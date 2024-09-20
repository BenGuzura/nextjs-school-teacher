import React from 'react'
import { notFound } from 'next/navigation';
import { getSchoolID } from '@/lib/action';
import UpdateSchool from '@/components/UpdateSchool';
const EditSchool = async  ( {params}: {params : {id : any}}) => {

    
    let id = params.id

    
    
    id = Number(id)
    console.log(id)

        const school = await getSchoolID(id)

    if(!school){
        notFound();
    }



    return (
        <div>
            <center>
                <div className='card w-96 flex flex-col text-center my-6'>
                    <div className="card-title text-center"> All Schools</div>

                    <div className="card-body bg-slate-100 text-center">
                        <UpdateSchool school={school} />
                    </div>
                </div>
            </center>
        </div>
    )
}

export default EditSchool
