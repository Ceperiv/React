import {useEffect, useState} from 'react';
import {getUsers} from "../../services/post.api";
import User from "../user/User";

export default function Users({userId}) {

    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
            .then(({data}) => setUsers([...data]))
    }, [])

    return (

                users.map((value) => <User key={value.id}
                                           item={value}
                                           userId={userId}/>)

    );
}