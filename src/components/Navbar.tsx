"use client"
import path from 'path'
import React from 'react'
import { GiTeacher } from "react-icons/gi";
import { SiSemanticscholar } from "react-icons/si";
import { LiaSchoolSolid } from "react-icons/lia";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const currentPath = usePathname()
    
    console.log(currentPath)

  return (
    <div>
        <div className="navbar bg-primary text-primary-content mb-5">

            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabIndex={0}   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a className={` btn btn-wide btn-sm m-3 hover:btn-accent ${currentPath == '/schools' || currentPath == '/' ? 'btn-accent' : '' }`}    href='/schools' > <SiSemanticscholar size={20}/> Schools</a></li>
                    <li><a className={`btn btn-wide btn-sm m-3 hover:btn-accent ${currentPath == '/schools/create' ? 'btn-accent' : '' }`}                  href='/schools/create'> <MdOutlineCreateNewFolder size={20}/> Add School</a></li>
                    <li><a className={`btn btn-wide btn-sm m-3 hover:btn-accent ${currentPath == '/teachers' ? 'btn-accent' : '' }`}                  href='/teachers'> <GiTeacher size={20} /> Teachers</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl"><LiaSchoolSolid size={43}/></a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a className={`btn btn-wide btn-sm m-3 hover:btn-accent ${currentPath == '/schools' ? 'btn-accent' : '' }`}    href='/schools'> <SiSemanticscholar size={20}/> Schools</a></li>
                <li><a className={`btn btn-wide btn-sm m-3 hover:btn-accent ${currentPath == '/schools/create' ? 'btn-accent' : '' }`}                  href='/schools/create'> <MdOutlineCreateNewFolder size={20}/> Add School</a></li>
                <li><a className={`btn btn-wide btn-sm m-3 hover:btn-accent ${currentPath == '/teachers' ? 'btn-accent' : '' }`}                  href='/teachers'> <GiTeacher size={20} /> Teachers</a></li>
                </ul>
            </div>

            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}

        </div>
    </div>
  )
}

export default Navbar
