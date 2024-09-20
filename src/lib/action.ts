'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import z from 'zod'
import prisma from '../../prisma/client'
import { log } from 'console'
import { create } from 'domain'
import { useRouter } from 'next/router'
import type { get } from 'http'
import { stringify } from 'querystring'

const SchoolShema = z.object({
    name: z.string().min(6),
    email: z.string().min(6),
    contact: z.string().min(10),
    location: z.string().min(6)
})


export const saveSchool = async (preState : any , formData : FormData ) => {

    const validateFields = SchoolShema.safeParse( Object.fromEntries(formData.entries()))

    if(!validateFields.success){
        return {Error : validateFields.error.flatten().fieldErrors}
    }

    try {
        await prisma.school.create({
            data: {
                name: validateFields.data.name,
                email: validateFields.data.email,
                contact: validateFields.data.contact,
                location: validateFields.data.location
            }
        })
    } catch (error) {
        return {message: "failed to save employee"}
    }

    revalidatePath("/schools/create")
    redirect("/schools")
}

export const getSchools = async ( query : string) => {
    try {
        const schools = await prisma.school.findMany({
            select:{
                id:true,
                name:true,
                email:true,
                contact:true,
                location:true
            },
            orderBy:{
                id: "desc"
            }
            
        })

        return schools


    } catch (error) {
        throw new Error('ggttt h')
    }
}


export const getSchoolID = async (id : number) => {
    try {
        const school = await prisma.school.findUnique({
            where:{ id },
            include: {
                teachers: {
                  
                  include: { teacher: true },
                },
              },
        })

        return school

    } catch (error) {
        // throw new Error('ggttt h')
    } 
}


export const UpdateSchoolById = async (id:number , preState : any , formData : FormData ) => {

    const validateFields = SchoolShema.safeParse( Object.fromEntries(formData.entries()))

    if(!validateFields.success){
        return {Error : validateFields.error.flatten().fieldErrors}
    }

    try {
        await prisma.school.update({
            data: {
                name: validateFields.data.name,
                email: validateFields.data.email,
                contact: validateFields.data.contact,
                location: validateFields.data.location
            },
            where:{id}
        })

    } catch (error) {
        return {message: "failed to update employee"}
    }

    revalidatePath("/schools/edit/"+id)
    redirect("/schools")
}

export const DeleteSchool = async (id : number) => {
    try {
        await prisma.school.delete({
            where:{id}
        })

    } catch (error) {
        return {message: "failed to save employee"}
    }

    revalidatePath("/schools")
    redirect("/schools")
}




export const getTeachers = async ( query : string) => {
    try {
        const teachers = await prisma.teacher.findMany({
            select:{
                id:true,
                name:true,
                email:true,
                contact:true,
                address:true
            },
            orderBy:{
                id: "desc"
            }
            
        })

        return teachers


    } catch (error) {
        throw new Error('ggttt h')
    }
}

export const getTeacherByID =async (id: number)=>{
    try {
        const teacher = await prisma.teacher.findUnique({
            where:{ id }
        })

        return teacher

    } catch (error) {
        // throw new Error('ggttt h')
    }   
}


export const  associateTeacherSchool = async (teacherId: number, schoolId: number) => {
  try {

    // console.log(teacherId , schoolId)

    const checkteach = await prisma.teacherSchool.findFirst({
        where:{    
            teacherId: teacherId,
            schoolId: schoolId, 
        }
    })

    if(checkteach){
        redirect("/manageTeachers/"+schoolId)
    }else{
        const teacherSchool = await prisma.teacherSchool.create({
        data: {
            teacherId: teacherId,
            schoolId: schoolId,
            salary: 100.09,
            subjects: "Maths",
            level: "form 1, Form 2"

        },
        });
        
        if(teacherSchool){
            redirect("/manageTeachers/edit/"+teacherSchool.id)
        }
        
        
    }


    
  } catch (error) {
    return {message: "failed to update employee"}
  }
}


export const getRelation = async (id : number) => {
    try {


        // const relation = await prisma.teacherSchool.findFirst({
        //     where:{ id },
        //     include:{
        //         teacher: true,
        //         school: true
        //     }
        // })

        // console.log("the data found is as " +  relation)

        // return relation


        const relation = await prisma.teacherSchool.findFirst({
            where: { id },
            include: {
                teacher: true,
                school: true
            }
        });

        if (relation) {
            console.log("The data found is:", JSON.stringify(relation, null, 2));
            return relation;
        } else {
            console.log("No relation found for id:", id);
            return null;
        }



    } catch (error) {
        // throw new Error('ggttt h')
    } 
}

export const UpdateRelationById = async (id:number , preState : any , formData : FormData ) => {

        const salary = formData.get('salary');
        const subjects = formData.get('subjects');
        const level = formData.get('level');
        const schoolId = formData.get('schoolId');

        console.log(schoolId)

        const updateData: any = {};
        if (salary !== null) updateData.salary = Number(salary);
        if (subjects !== null) updateData.subjects = subjects.toString();
        if (level !== null) updateData.level = level.toString();

    try {

        const updating  = await prisma.teacherSchool.update({
            data: updateData,
            where: { id }
          });


        //revalidatePath("/manageTeachers/"+schoolId)

        if(updating){
            redirect("/manageTeachers/"+schoolId)
        }
        
        

    } catch (error) {
        return {message: "failed to update "}
    }

}