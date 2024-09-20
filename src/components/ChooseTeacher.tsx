// import { associateTeacherSchool } from '@/lib/action';
// import React from 'react'
// import { IoMdAddCircle } from "react-icons/io";



// const ChooseTecher =  async ({teacherID , schoolID} : {teacherID: number , schoolID: number}) => {

//     const bindTeachtoSchool = associateTeacherSchool.bind(null , teacherID , schoolID)

//     return (
//         <div>
//              <form action={bindTeachtoSchool}>
//                 <button ><IoMdAddCircle size={20} className='text-green-500'/> add teacher </button> 
//             </form>
//         </div>
//     )
// }

// export default ChooseTecher

'use client';

import React from 'react';
import { IoMdAddCircle } from "react-icons/io";
import { associateTeacherSchool } from '@/lib/action';

interface ChooseTecherProps {
  teacherID: number;
  schoolID: number;
}

const ChooseTecher: React.FC<ChooseTecherProps> = ({ teacherID, schoolID }) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await associateTeacherSchool(teacherID, schoolID);
      // Handle successful association (e.g., show a success message, update UI)
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Error associating teacher with school:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <IoMdAddCircle size={20} className='text-green-500'/>
          add teacher
        </button> 
      </form>
    </div>
  );
};

export default ChooseTecher;