import ProfileInfo from "./ProfileInfo";

function MapandKey(){
    const people =[
        {id:1, name:'Dinisha',role:'Developer'},
        {id:2, name:'Mugesh',role:'Design'},
        {id:3, name:'Priya',role:'Designer'},
        
    ];
    return (
        <div>
            {
                people.map((person)=>(
                    <ProfileInfo key={person.id} name={person.name} role={person.role}/>     
                ))
            }
        </div>
    );
}
export default MapandKey;