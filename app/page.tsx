"use client";
import Image from "next/image";
import  "./page.module.css";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import {  useState } from "react";
import Edit from "./components/edit";

export default function Home() {
  const [name , description] =  useState<string | null>(null);
  const [add , setAdded] = useState(true);

  return (
    <div className="mx-24 my-10">
      <div className="container bg-white mb-8 rounded-lg">
        <header className="rounded-t-md items-center px-16 py-2 bg-blue-600">
          <h1 className="font-semibold text-3xl text-white">Task Management &gt;{add? "Home" : "Edit"}</h1>
        </header>
        
        <main className="px-16 py-2">
          <h2 className="font-semibold text-2xl pb-4">{add? "Add" : "Edit"} a new Task</h2>
          <input className="bg-slate-300 w-full p-4 mb-4 rounded-t-md" placeholder="Title"/>
          <TextareaAutosize className='bg-slate-300 w-full p-4 mb-4 rounded-t-md'
                        aria-label="empty textarea"
                        minRows={6}
                        maxRows={6}
                        style={{resize: 'none'}}
                        placeholder="Description"
                        />
                      
          {add && <div className="bg-blue-600 w-full p-4 flex items-center justify-center flex-row-reverse gap-4 text-white mb-2 rounded-lg hover:bg-blue-400">
           <button className="font-medium text-xl">Add</button>
           <Image src="./image/plus.svg" alt="plus-img" width={20} height={20}/>
          </div>}
          {!add && <Edit/>}
          
        </main>
        
      </div>
      {add && <footer className="bg-blue-600 rounded-lg">
        <header className="flex justify-between items-center px-16 py-2 bg-blue-600 rounded-t-md">
            <h1 className="font-semibold text-3xl text-white">Tasks</h1>
        </header>
        <section className="bg-blue-300 p-4 flex flex-col gap-4">
          <div className="flex justify-center text-2xl p-10">You have nothing to do. Go get some sleep.</div>
        </section>
      </footer>}

    </div>
  );
}
