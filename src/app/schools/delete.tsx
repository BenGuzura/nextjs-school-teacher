
import { DeleteSchool } from "@/lib/action";
import { AiTwotoneDelete } from "react-icons/ai";

export const DeleteSchoolByID = ({id} : {id: number}) => {

    const DeleteSchoolWithID = DeleteSchool.bind(null , id)

  return (
    <div>
        <form action={DeleteSchoolWithID}>
        <button ><AiTwotoneDelete size={20} className='text-red-500'/></button> 
        </form>
    </div>
  )
}
