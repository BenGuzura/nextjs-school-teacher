"use client"
import React from 'react'
import { BsFillSendPlusFill } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { FaLocationPinLock } from "react-icons/fa6";
import { useFormState } from 'react-dom';
import type { TeacherSchool } from '@prisma/client';
import { UpdateRelationById } from '@/lib/action';



const UpdateRelation = ({teacheSchool} : {teacheSchool: any}) => {
    
    const updateRelationWithId = UpdateRelationById.bind(null , teacheSchool.id)
    const [state , formAction] = useFormState(updateRelationWithId, null)


  return (
    <div>
                  <div className="card-body bg-slate-100 text-center">
                <form action={formAction}>

                    <div className="flex flex-col gap-2 mb-4">

                        <div className="flex flex-col gap-4 ">
                            <h4>School</h4>
                            <label className="input input-bordered flex items-center gap-2 ">
                                <TbSchool size={20} />
                                <input type="text"  className="grow input-bordered input-secondary   "  readOnly value={teacheSchool?.school?.name} placeholder="School Name" />

                            </label>
                        
                            <input type="hidden" name='schoolId' value={teacheSchool.schoolId}/>
                            <h4>Teacher</h4>
                            <label className="input input-bordered flex items-center  gap-2">
                                <HiOutlineMail size={20} />
                                <input type="text"  className="grow input-bordered input-secondary   " readOnly value={teacheSchool?.teacher?.name} placeholder="email" />

                            </label>
                            


                            <h4>Salary</h4>
                            <label className="input input-bordered flex items-center gap-2">
                                <IoCall size={20} />
                                <input type="text" name='salary' step={0.1} className="grow input-bordered input-secondary  w-96" required defaultValue={teacheSchool?.salary} placeholder="cell number" />

                            </label>

                            <h4>Subjects</h4>
                            <label className="input input-bordered flex items-center gap-2">
                                <FaLocationPinLock size={20} />
                                <input type="text" name='subjects' className="grow input-bordered input-secondary  w-96" required defaultValue={teacheSchool?.subjects} placeholder="address" />

                            </label>
                        </div>




                    </div>
                    <button type='submit' className="btn btn-wide btn-accent"> <BsFillSendPlusFill size={20} /> Update </button>
                    <a href={`/manageTeachers/${teacheSchool.schoolId}`}className='btn btn-wide btn-danger'> return back</a>
                </form>
            </div>
    </div>
  )
}

export default UpdateRelation
