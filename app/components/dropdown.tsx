interface Dropdown {
    setClicked: (value: string) => void; 
    setSelect: (value: boolean) => void; 
  }
export default function Dropdown(props:Dropdown){
    const {setClicked , setSelect} = props;
    return(
    <>
    <div className="absolute w-full top-0 rounded-md bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <p onClick={()=>{setSelect(false) ; setClicked("inQa")}} className="hover:bg-slate-300 px-3 py-3 ">inQa</p>
        <p onClick={()=>{setSelect(false) ; setClicked("Done")}} className="hover:bg-slate-300 px-3 py-3 ">Done</p>
        <p onClick={()=>{setSelect(false) ; setClicked("Todo")}} className="hover:bg-slate-300 px-3 py-3 ">ToDo</p>
    </div>
    </>
    )
}