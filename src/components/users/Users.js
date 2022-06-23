import {useEffect, useState} from 'react';
import {User} from "../user/User";

function Users() {
// try{
    const [users , setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    })
    return (
        <div>
            {

                users.map(user => <User key={user.id} item={user}/>)
            }
        </div>
    );
    // catch(err){
    //     console.warn(err)
    // }
}

export {Users};