import React from 'react'
import { FaUserTie } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { getTeachers } from '@/lib/action';


const TeahersTable =  async ({query} : {query: string}) => {

    const teachers = await getTeachers(query)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-stripped table-hover">

                    <thead>
                        <tr>
                            <th>
                                <label>

                                </label>
                            </th>
                            <th>Teacher</th>
                            <th>Address</th>
                            <th>Experience </th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>

                        {teachers.map((t,i)=>(

                       
                        <tr key={i}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <FaUserTie color='blue' size={35} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{t.name}</div>
                                        <div className="text-sm opacity-50">{t.contact}</div>
                                        <div className="text-sm opacity-50">{t.email}</div>
                                    </div>
                                </div>
                            </td>

                            <td >
                                <span className='flex flex-row gap-3'> <FaMapLocationDot className=' text-green-500 ' size={16} /> {t.address} </span>
                            </td>

                            <td >
                                <span className='flex flex-row gap-3'>
                                    <IoIosStar className=' text-green-800 ' size={16} />
                                    <IoIosStarHalf className=' text-green-800 ' size={16} />
                                    <IoIosStarOutline className=' text-green-800 ' size={16} />

                                </span>
                            </td>


                        </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default TeahersTable
