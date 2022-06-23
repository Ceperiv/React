import {useEffect, useState} from 'react';

import {User} from "../user/User";
import {UserDetails} from "../userDetails/UserDetails";

function Users() {
// try{
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    })
    const userButton = (item) => {
        setUser(item)

    }

    return (
<div className={'box'}>
        {users.map(user => <User key={user.id} item={user} userButton={userButton}/>)}
        {user && <UserDetails user={user}/>}
</div>
)

// catch(err){
//     console.warn(err)
// }
}

export {Users};