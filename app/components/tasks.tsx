import { number } from "mathjs";
import Image from "next/image";
interface Task {
    allInfo: Array<{ id:number; title: string; description: string ; status: string }>;
    setEditPosition: (value: {id:number; name: string; descript: string ; status:string }) => void;
    setClicked :(value: string) => void; 
    setAdded : (value: boolean) => void; 
    setInfo : (value: string) => void; 
    setName : (value: string) => void;
}

export default function Tasks(props:Task){

    const {allInfo, setAdded , setEditPosition , setInfo , setName , setClicked} = props;
    return(
        <>
        {allInfo.map((pos , index) => (
          <div key={index}  className="bg-white flex items-center justify-between px-4 py-4 rounded-xl">
            <div className="flex flex-col">
            <h2 className="font-semibold text-xl">{pos.title}</h2>
            <p>{pos.description}</p>
          </div>
          <div className="flex gap-6">
            <h3 className="text-lg bg-blue text-white rounded-xl px-6 py-2 hover:bg-blue-400 cursor-pointer">{pos.status}</h3>
            <button onClick={()=>{setAdded(false) ; setClicked(pos.status) ;setInfo(pos.description); setName(pos.title) ;setEditPosition({id:pos.id, name: pos.title, descript: pos.description , status:pos.status})
          }}>
            <Image src="./image/Edit.svg" alt="edit-form" width={20} height={20}/>
            </button>
          </div>
          </div>
        ))}
        </>
    )
}