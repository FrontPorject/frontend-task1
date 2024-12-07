"use client";
import Image from "next/image";
import  "./page.module.css";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { useState } from "react";
import Edit from "./components/edit";
import Tasks from "./components/tasks";

export default function Home() {
  const [add , setAdded] = useState(true);
  const [name , setName] = useState('');
  const [info , setInfo] = useState('');
  const [id , setId] = useState(0);
  const [state , setState] = useState('Todo');
  const [position, setPosition] = useState<{ id:number ; title: string; description: string ; status:string }[]>([]);
  const [editPosition, setEditPosition] = useState<{id: number; name: string; descript: string; status: string;}>({ id: 0, name: "", descript: "", status: "todo"});
  const [clicked, setClicked] = useState<string>("Todo");
  const AddTasks = ()=> {
    if(name.trim()!= "" && info.trim()!= ""){
      setId(id + 1)
      setPosition((prev) => [
        ...prev,
        {id: id + 1, title: name, description: info , status: "Todo" },
      ]);
    }
    }

  return (
    <div className="mx-24 my-10">
      <div className="container bg-white mb-8 rounded-lg">
        <header className="rounded-t-md items-center px-16 py-2 bg-blue">
          <h1 className="font-semibold text-3xl text-white">Task Management &gt;{add? "Home" : "Edit"}</h1>
        </header>
        
        <main className="px-16 py-2">
          <h2 className="font-semibold text-2xl pb-4">{add? "Add" : "Edit"} a new Task</h2>
          <input value = {name} onChange={e => setName(e.target.value)} className={`font-semibold border-b-2  bg-slate-300 w-full p-4 mb-4 rounded-t-md ${add? "border-b-slate-400" : "border-b-blue-500"}`} placeholder="Title"/>
          <TextareaAutosize className='bg-slate-300 border-b-2 border-b-slate-400 w-full p-4 mb-4 rounded-t-md font-semibold outline-none'
                        aria-label="empty textarea"
                        minRows={6}
                        maxRows={6}
                        style={{resize: 'none'}}
                        placeholder="Description"
                        onChange={e => setInfo(e.target.value)} 
                        value = {info}
                        />
                      
          {add && <div onClick={AddTasks} className="bg-blue w-full p-4 flex items-center justify-center flex-row-reverse gap-4 text-white mb-2 rounded-lg hover:bg-blue-400 cursor-pointer">
           <button className="font-medium text-xl cursor-pointer">Add</button>
           <Image src="./image/plus.svg" alt="plus-img" width={20} height={20}/>
          </div>}
          {!add && <Edit setAdded={setAdded} clicked={clicked} setClicked={setClicked} setAllinfo = {setPosition} allInfo = {position} editPosition={editPosition} info={info} name={name} status={state} setStatus={setState} setInfo={setInfo} setName={setName} />}
          
        </main>
        
      </div>
      {add && <footer className="bg-blue rounded-lg">
        <header className="flex justify-between items-center px-16 py-2 bg-blue rounded-t-md">
            <h1 className="font-semibold text-3xl text-white">Tasks</h1>
        </header>
        <section className="bg-blue-300 p-4 flex flex-col gap-4 rounded-b-lg">
          {position.length == 0 && <div className="flex justify-center text-2xl p-10">You have nothing to do. Go get some sleep.</div>}
          <Tasks allInfo = {position} setAdded={setAdded} setEditPosition={setEditPosition} setInfo={setInfo} setName={setName} setClicked={setClicked}/>
        </section>
      </footer>}

    </div>
  );
}
