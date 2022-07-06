import React, {useEffect, useState} from 'react';

import {usersService} from "../services";
import {User} from "./User";
import {CommentsForm} from "./CommentsForm";


function Users(props) {

    let [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getInfo().then(({data}) => setUsers(data))
    }, []);


    return (
        <div>
            {

                users.map(value => <User key={value.id} user={value}/>)
            }

            <CommentsForm/>
        </div>


    );
}

export {Users};