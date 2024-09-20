import { associateTeacherSchool } from '@/lib/action';
import React from 'react'
import { IoMdAddCircle } from "react-icons/io";



const ChooseTecher =  async ({teacherID , schoolID} : {teacherID: number , schoolID: number}) => {

    const bindTeachtoSchool = associateTeacherSchool.bind(null , teacherID , schoolID)

    return (
        <div>
             <form action={bindTeachtoSchool}>
                <button ><IoMdAddCircle size={20} className='text-green-500'/> add teacher </button> 
            </form>
        </div>
    )
}

export default ChooseTecher
