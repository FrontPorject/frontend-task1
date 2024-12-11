interface Dropdown {
    setClicked: (value: string) => void; 
    setSelect: (value: boolean) => void; 
    state : string;
  }
export default function Dropdown(props:Dropdown){
    
    const {setClicked , setSelect , state} = props;
    return(
    <>
    <div className="absolute w-full top-0 rounded-md bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        {state!="Done" && <p onClick={()=>{setSelect(false) ; setClicked("inQA")}} className="hover:bg-slate-300 px-3 py-3 ">inQA</p>}
        {(state=="inQA" || state=="InProgress") && <p onClick={()=>{setSelect(false) ; setClicked("Done")}} className="hover:bg-slate-300 px-3 py-3 ">Done</p>}
        {(state=="inQA" || state=="Todo") &&<p onClick={()=>{setSelect(false) ; setClicked("Todo")}} className="hover:bg-slate-300 px-3 py-3 ">ToDo</p>}
        {(state=="Todo" || state=="InProgress") &&<p onClick={()=>{setSelect(false) ; setClicked(`InProgress`)}} className="hover:bg-slate-300 px-3 py-3">InProgress</p>}
    </div>
    </>
    )
}