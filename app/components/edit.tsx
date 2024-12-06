import Image from "next/image";
import { useState } from "react";
import Dropdown from "./dropdown";
interface Edit{
    setAdded : (value: boolean) => void; 
    clicked : string
    setClicked : (value: string) => void; 
}
export default function Edit(props:Edit){
    const {setAdded , clicked , setClicked} = props;
    const [select, setSelect] =  useState<boolean>(false);
    return(
        <>
        <div>
            <div className="relative">
                <div className="selected-option relative flex justify-between items-center px-3 py-3 text-base w-full  bg-slate-300 mb-4 rounded-t-md cursor-pointer border-b-2 border-b-blue-500" onClick={()=>setSelect(!select)}>
                    <p className="font-semibold">{clicked}</p>
                    <Image src="./image/arrow.svg" alt="arrowBtn" width={15} height={15}/>
                </div>
                {select && <Dropdown setClicked={setClicked} setSelect = {setSelect}/>}
            </div>


            <div className="flex gap-4 justify-between items-center">
                <button className="edit flex items-center flex-row-reverse gap-2 bg-blue px-16 py-6 rounded-md hover:bg-blue-400">
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