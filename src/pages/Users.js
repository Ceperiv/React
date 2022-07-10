import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import './pages.css';
import {getUserInfo} from "../services/api.services";
import {User} from "../components/User";


function Users(props) {
    let [users, setUsers] = useState([]);
    // console.log(users)
    useEffect(() => {
        getUserInfo.then(value => setUsers(value))
    }, [])

    return (

        <ol>
            {users ? (users.map(value => <User item={value} key={value.id}/>)) :
                (<h1>Loading///////////////////////</h1>)}
            <Outlet/>
        </ol>
    );
}

export {Users};