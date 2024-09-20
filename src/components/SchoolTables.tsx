import type { table } from 'console'
import type { type } from 'os'
import React from 'react'
import { ImBookmarks } from "react-icons/im";
import { GiTeacher } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
import path from 'path';
import { FaEdit } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";

import { getSchools } from '@/lib/action';
import { DeleteSchoolByID } from '@/app/schools/delete';
import { FaUserTie } from "react-icons/fa6";


const SchoolTables = async ({query} : {query: string}) => {

    const schools = await getSchools(query)

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
                            <th>School</th>
                            <th>Location</th>
                            <th>Teachers</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>

                    {schools.map((s, i)=>(

                   
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
                                            <ImBookmarks color='blue' size={35} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{s.name}</div>
                                        <div className="text-sm opacity-50">{s.contact}</div>
                                        <div className="text-sm opacity-50">{s.email}</div>
                                    </div>
                                </div>
                            </td>

                            <td >
                                <span className='flex flex-row gap-3'> <FaMapLocationDot className=' text-green-500 ' size={16} /> {s.location}  </span>
                            </td>

                            <td >
                                <span className='flex flex-row gap-3'> <GiTeacher className=' text-green-800 ' size={16} /> 34 teachers </span>
                            </td>

                            <th>
                                <ul className="menu menu-horizontal bg-base-200 rounded-box">
                                    <li>
                                        <a href={`/schools/edit/${s.id}`}  >  
                                            <FaEdit size={20} className='text-green-400'/> edit
                                        </a>
                                    </li>   
                                    
                                    <li>
                                        <a href={`/manageTeachers/${s.id}`} >
                                            <FaUserTie size={20}/> Teachers
                                        </a>
                                    </li>
                                    <li>
                                        <DeleteSchoolByID id={s.id} />
                                    </li>
                                </ul>
                            </th>
                            
                        </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default SchoolTables
