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
          <div key={index} className="bg-white justify-between flex md:flex-row flex-col md:items-center px-4 py-4 rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-full">
          <div className="flex flex-col md:mb-0 mb-10 break-all text-wrap flex-wrap md:w-[70%] lg:w-[80%]">
            <h2 className="font-semibold text-xl md:mb-0 mb-6 line-clamp-1">{pos.title}</h2>
            <p className="break-all line-clamp-3 ">{pos.description}</p>
          </div>
          <div className="flex justify-between md:justify-end md:gap-8 ">
            <h3 className="sm:text-lg text-xs font-bold bg-blue text-white rounded-xl px-6 py-2">{pos.status}</h3>
            <button onClick={()=>{setAdded(false) ; setClicked(pos.status) ;setInfo(pos.description); setName(pos.title) ;setEditPosition({id:pos.id, name: pos.title, descript: pos.description , status:pos.status})
           }} disabled={pos.status == "Done"}>
            <Image className={`opacity-${pos.status == "Done" ? "45" : "1"}`}  src="./image/Edit.svg" alt="edit-form" width={20} height={20}/>
            </button>
          </div>
          </div>
        ))}
        </>
    )
}