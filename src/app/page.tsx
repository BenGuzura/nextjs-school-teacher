import SchoolTables from "@/components/SchoolTables";
import Image from "next/image";

export default function Home() {

  

  return (
    <>
      <div className="card mx-5">
         <div className="card-title text-center"> All Schools</div>
         <div className="card-body">
            <SchoolTables />
         </div>
        
      </div>
      
    </>
  );
}
