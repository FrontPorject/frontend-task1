import Image from "next/image";
interface Task {
    allInfo: Array<{ title: string; description: string }>;
    setEditPosition: (value: { name: string; descript: string }) => void;
    setAdded : (value: boolean) => void; 
    clicked : string
}

export default function Tasks(props:Task){

    const {allInfo, setAdded , setEditPosition , clicked} = props;
    return(
        <>
        {allInfo.map((pos , index) => (
          <div key={index}  className="bg-white flex items-center justify-between px-4 py-4 rounded-xl">
            <div className="flex flex-col">
            <h2 className="font-semibold text-xl">{pos.title}</h2>
            <p>{pos.description}</p>
          </div>
          <div className="flex gap-6">
            <h3 className="text-lg bg-blue text-white rounded-xl px-6 py-2 hover:bg-blue-400 cursor-pointer">{clicked}</h3>
            <button onClick={()=>{setAdded(false) ; setEditPosition({ name: pos.title, descript: pos.description })
          }}>
            <Image src="./image/Edit.svg" alt="edit-form" width={20} height={20}/>
            </button>
          </div>
          </div>
        ))}
        </>
    )
}