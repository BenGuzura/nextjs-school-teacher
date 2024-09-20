import { getSchoolID, getTeachers } from '@/lib/action'
import React from 'react'
import { notFound, useRouter } from 'next/navigation';
import { ImBookmarks } from "react-icons/im";
import { FaUserTie } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import ChooseTecher from '@/components/ChooseTeacher';
import { FaEdit } from "react-icons/fa";



const ManageTeachers = async ({ params, query }: { params: { id: any }, query: string }) => {



    let id = params.id
    id = Number(id)
    const school = await getSchoolID(id)


    if (!school) {
        notFound();
    }

     const schoolTeachers = school.teachers

    // console.log(schoolTeachers)

    const teachers = await getTeachers(query)

    return (
        <div className='flex  '>

            <div className="  p-10 mx-14 rounded border border-success">
                <div className="flex items-center gap-3 my-5">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <ImBookmarks color='blue' size={35} />
                        </div>
                    </div>

                    <div className='flex flex-row gap-5'>
                        <div className="font-bold">{school.name}</div>
                        <div className="text-sm opacity-50">{school.contact}</div>
                    </div>

                    <div className="">
                        <div className="text-sm opacity-50">{school.email}</div>
                        <div className="text-sm opacity-50">{school.location}</div>
                    </div>
                </div>

                <h5>{school.name} Teacher's  </h5>

                <div className='my-3'>
                    <table className="table table-stripped table-hover">

                        <thead>
                            <tr>
                                <th>
                                    <label>

                                    </label>
                                </th>
                                <th>Teacher</th>
                                <th>Address</th>
                                <th>Salary </th>
                                <th>Subjects </th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>

                            {schoolTeachers.map((t, i) => (


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
                                                <div className="font-bold">{t.teacher.name}</div>
                                                <div className="text-sm opacity-50">{t.teacher.contact}</div>
                                                <div className="text-sm opacity-50">{t.teacher.email}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td >
                                        <span className='flex flex-row gap-3'> <FaMapLocationDot className=' text-green-500 ' size={16} /> {t.teacher.address} </span>
                                    </td>

                                    <td >
                                        <span className='flex flex-row gap-3'> USD${t.salary} </span>
                                    </td>

                                    <td >
                                        <span className='flex flex-row gap-3'>  {t.subjects} </span>
                                    </td>

                                    <td>
                                    <a href={`/manageTeachers/edit/${t.id}`}  >  
                                            <FaEdit size={20} className='text-green-400'/> edit
                                        </a>
                                    </td>


                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>


            <div className=" p-10 mx-14 rounded border border-info">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <GiTeacher color='blue' size={35} />
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className="font-bold">All Teachers </div>

                    </div>
                </div>

                <div>
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

                            {teachers.map((t, i) => (


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

                                    <td>
                                        <ChooseTecher teacherID={t.id} schoolID={school.id} />
                                    </td>


                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    )
}

export default ManageTeachers
