import React from 'react'
import { notFound } from 'next/navigation';
import { getRelation, getSchoolID } from '@/lib/action';
import UpdateSchool from '@/components/UpdateSchool';
import UpdateRelation from '@/components/UpdateRelation';

const EditRelation = async  ( {params}: {params : {id : any}}) => {

    
    let id = params.id

    
    
    id = Number(id)
    console.log(id)


    const teacherSchool = await getRelation(id);

    if(!teacherSchool){
        notFound();
    }


    console.log(teacherSchool)

    return (
        <div>
            <center>
                <div className='card w-96 flex flex-col text-center my-6'>
                    <div className="card-title text-center"> Update Teacher Details to School</div>

                    <div className="card-body bg-slate-100 text-center">
                        <UpdateRelation teacheSchool={teacherSchool} />
                    </div>
                </div>
            </center>
        </div>
    )
}

export default EditRelation
