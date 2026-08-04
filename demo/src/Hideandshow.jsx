import { useState } from "react"
function Hideandshow()
{
    const [open ,setOpen]=useState(false);
    return(
        <div>
            <button onClick={()=>setOpen(!open)}>{open?'hide': 'show '}</button>
            
            {open&&<p> here this is dinisha</p> } 

        </div>
    )
}
export default Hideandshow;