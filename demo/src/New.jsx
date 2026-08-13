import  {useState, useEffect} from 'react';
import axios from 'axios';
function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading]= useState(true);
    const [error, setError]=useState(null);
    useEffect(() => {
        axios.get('http://localhost:4444/api/people')
        .then((Response) => {
            setUsers(Response.data);
        }).catch((err)=>{
            setError(err.message);
        }).finally(()=>{
            setLoading(false);
        });
    },[]);
    if(loading) return <p>Loading users....</p>
    if(error) return <p>Something went wrong: {error}</p>
    return (
        <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name} - {user.email}</li>
        ))}
        </ul>
    );
}
export default UserList;