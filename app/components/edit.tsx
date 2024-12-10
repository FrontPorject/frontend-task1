import Image from "next/image";
import { useEffect, useState } from "react";
import Dropdown from "./dropdown";
interface Edit{
    setAdded : (value: boolean) => void; 
    clicked : string;
    info: string;
    setInfo: (value: string) => void;
    name: string;
    setName: (value: string) => void;
    status : string;
    setClicked : (value: string) => void; 
    setStatus : (value: string) => void;
    setAllinfo: (value: Array<{ id:number; title: string; description: string; status: string }>) => void;
    allInfo: Array<{ id:number; title: string; description: string ; status: string }>;
    editPosition: {id: number; name: string; descript: string; status: string;};
}
export default function Edit(props:Edit){
    const {setAllinfo,allInfo, setAdded , clicked , setClicked ,editPosition , info , name , status , setStatus , setName , setInfo} = props;
    const [select, setSelect] =  useState<boolean>(false);
    useEffect(() => {
        setStatus(clicked);
      }, [clicked, setStatus]);      
    const EditChanged = ()=>{
    setAllinfo(
        allInfo.map((todo) => {
          if (todo.id === editPosition.id) {
            todo.description = info;
            todo.title = name;
            todo.status = status;
          }
          return todo;
        })
      );
      setAdded(true);
      setInfo("")
      setName("")
    }
    return(
        <>
        <div>
            <div className="relative">
                <div className="selected-option relative flex justify-between items-center px-3 py-3 text-base w-full  bg-slate-300 mb-4 rounded-t-md cursor-pointer border-b-2 border-b-blue-500" onClick={()=>setSelect(!select)}>
                    <p className="font-semibold">{clicked}</p>
                    {status!="Done" && <Image src="./image/arrow.svg" alt="arrowBtn" width={15} height={15}/>}
                </div>
                {select && <Dropdown setClicked={setClicked} setSelect = {setSelect} state={status}/>}
            </div>


            <div className="flex gap-4 justify-between items-center">
                <button onClick={EditChanged} className="edit flex items-center flex-row-reverse gap-2 bg-blue px-16 py-6 rounded-md hover:bg-blue-400">
                    <h3 className="text-white">Edit</h3>
                    <Image src="./image/Edit.svg" alt="editForm" width={20} height={20}/>
                </button>
                <button onClick={()=>{setAdded(true)}} className="cancel flex items-center flex-row-reverse gap-2 px-16 py-6 rounded-md border-slate-300 border-2">
                    <h3 className="text-slate-400">cancel</h3>
                </button>
            </div>
        </div>
        </>
    )
}