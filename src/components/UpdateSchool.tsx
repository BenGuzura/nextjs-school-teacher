"use client"
import React from 'react'
import { BsFillSendPlusFill } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { FaLocationPinLock } from "react-icons/fa6";
import { useFormState } from 'react-dom';
import { UpdateSchoolById } from '@/lib/action';
import type { School } from '@prisma/client';


const UpdateSchool = ({school} : {school: School}) => {

    const updateSchoolWithId = UpdateSchoolById.bind(null , school.id)
    const [state , formAction] = useFormState(updateSchoolWithId, null)


    return (
        <div>
            <div className="card-body bg-slate-100 text-center">
                <form action={formAction}>

                    <div className="flex flex-col gap-2 mb-4">

                        <div className="flex flex-col gap-4 ">
                            <label className="input input-bordered flex items-center gap-2 ">
                                <TbSchool size={20} />
                                <input type="text" name='name' className="grow input-bordered input-secondary   " defaultValue={school.name} placeholder="School Name" />

                            </label>
                            <small className='text-red-400 text-sm mb-9'>{state?.Error?.name}</small>


                            <label className="input input-bordered flex items-center  gap-2">
                                <HiOutlineMail size={20} />
                                <input type="email" name='email' className="grow input-bordered input-secondary   " defaultValue={school.email} placeholder="email" />

                            </label>
                            <small className='text-red-400 text-sm mb-9'>{state?.Error?.email}</small>


                            <label className="input input-bordered flex items-center gap-2">
                                <IoCall size={20} />
                                <input type="text" name='contact' className="grow input-bordered input-secondary  w-96" defaultValue={school.contact} placeholder="cell number" />

                            </label>
                            <small className='text-red-400 text-sm mb-9'>{state?.Error?.contact}</small>

                            <label className="input input-bordered flex items-center gap-2">
                                <FaLocationPinLock size={20} />
                                <input type="text" name='location' className="grow input-bordered input-secondary  w-96" defaultValue={school.location} placeholder="address" />

                            </label>
                            <small className='text-red-400 text-sm mb-9'>{state?.Error?.location}</small>
                        </div>




                    </div>
                    <button className="btn btn-wide btn-accent"> <BsFillSendPlusFill size={20} /> Update school</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateSchool
