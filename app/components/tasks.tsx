import Image from "next/image";
interface Task {
    title: string;
    description: string;
}
export default function Tasks({props:Task , setAdded:function}){
    const {title, description} = props;
    return(
        <>
        <div className="bg-white flex items-center justify-between px-4 py-4 rounded-xl">
        <div className="flex flex-col">
          <h2 className="font-semibold text-xl">{title}</h2>
          <p>{description}</p>
        </div>

        <div className="flex gap-6">
          <h3 className="text-lg">Todo</h3>
          <button onClick={()=>{setAdded(false)}}>
          <Image src="./image/Edit.svg" alt="edit-form" width={20} height={20}/>
          </button>
        </div>
    </div>
        </>
    )
}