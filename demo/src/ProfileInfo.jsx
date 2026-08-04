function ProfileInfo({id, name, role,})
{
    return(
        <div>
            <h1>{id}</h1>
            <h2>{name}</h2>
            
            <h2>{role}</h2>
        </div>
    );
}
export default ProfileInfo;