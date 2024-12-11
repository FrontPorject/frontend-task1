"use client";
import Image from "next/image";
import  "./page.module.css";
import TextField from '@mui/material/TextField';
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
  const [bordercolor, setBorderColor] = useState(false);

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
    <div className="md:mx-24 md:my-10 h-screen md:h-0">
      <div className="bg-white mb-8 rounded-lg">
        <header className="md:rounded-t-md items-center px-6 md:px-16 py-2 bg-blue">
          <h1 className="font-semibold text-xl md:text-3xl text-white ">Task Management &gt;{add? " Home" : " Edit"}</h1>
        </header>
        
        <main className="px-6 md:px-16 py-2">
          <h2 className="font-semibold text-lg md:text-2xl pb-4">{add? "Add a new" : "Edit"} Task</h2>
          <TextField value = {name} onClick={() => setBorderColor((prev) => !prev)}  onChange={e => setName(e.target.value)} className={`font-semibold  bg-slate-300 w-full mb-4 rounded-t-md `} id="filled-basic" label="Title" variant="filled"/>
        
          <TextField className={`bg-slate-300  border-b-slate-400 w-full mb-4 rounded-t-md font-semibold outline-none ${ bordercolor ? "border-b-slate-400" : "border-b-blue-500"}`}
                        rows={add ? 6 : 20}
                        id="filled-multiline-static"
                        variant="filled"
                        multiline
                        placeholder="Description"
                        onChange={e => setInfo(e.target.value)} 
                        value = {info}
                        onClick={() => setBorderColor((prev) => !prev)}
            />
                      
          {add && <div onClick={AddTasks} className="bg-blue w-full p-4 flex items-center justify-center flex-row-reverse gap-4 text-white mb-2 rounded-lg hover:bg-blue-400 cursor-pointer">
           <button className="font-medium text-lg md:text-xl cursor-pointer">Add</button>
           <Image src="./image/plus.svg" alt="plus-img" width={20} height={20}/>
          </div>}
          {!add && <Edit setAdded={setAdded} clicked={clicked} setClicked={setClicked} setAllinfo = {setPosition} allInfo = {position} editPosition={editPosition} info={info} name={name} status={state} setStatus={setState} setInfo={setInfo} setName={setName} />}
          
        </main>
        
      </div>
      {add && <footer className="bg-blue rounded-lg h-full">
        <header className="flex justify-between items-center px-6 md:px-16 py-6 bg-blue md:rounded-t-md rounded-t-full ">
            <h1 className="font-semibold text-2xl md:text-3xl text-white">Tasks</h1>
        </header>
        <div className={`bg-lightBlue h-full md:h-auto rounded-t-3xl flex flex-col ${position.length==0? "justify-center":""}`}>
        <section className={`bg-lightBlue md:flex rounded-t-full md:rounded-t-none p-4  md:flex-col gap-4 rounded-b-lg ${position.length==0? "flex justify-center":"grid grid-cols-2"}`}>
          {position.length == 0 && <div className="flex flex-col justify-center text-4xl md:text-2xl p-10 items-center">
            <p>You have nothing to do.</p>
            <p>Go get some sleep.</p>
            </div>}
          <Tasks allInfo = {position} setAdded={setAdded} setEditPosition={setEditPosition} setInfo={setInfo} setName={setName} setClicked={setClicked}/>
        </section>
        </div>
      </footer>}

    </div>
  );
}
