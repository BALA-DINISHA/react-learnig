import { useState,useEffect } from "react";

function Clock(){
    const [time ,setTime]=useState(new Date());

    useEffect(()=>
    {
        const timer= setInterval(() => {
                setTime(new Date());
            }, 5000);
            return ()=> clearInterval(timer);
    },[]);
    return (
        <div>
                <p> Current time :{time.toLocaleTimeString()}</p>
        </div>
    )
}
export default Clock;