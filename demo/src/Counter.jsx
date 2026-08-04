import { useState } from "react";

function Counter(){
    const [count, setCount]=useState(0);
    const [like, setLike]=useState(false);
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>Add</button>
            <button onClick={()=>setCount(count-1)}>Subract</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={()=>setLike(!like)}> { like? " Like ":'Not Like'}</button>
            
        </div>
    )
}
export default Counter