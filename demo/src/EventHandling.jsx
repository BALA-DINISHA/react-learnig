import { useState } from "react";

function EventHandling(){
    const [name, setName]= useState('');

    function handleChange(event)
    {
        setName(event.target.value);
    }
    return(
        <div>

                <input type="text" value={name} onChange={handleChange} />
                <p>Hello ,{name|| 'Stranger'}!</p>
        </div>
    )

}
export default EventHandling;