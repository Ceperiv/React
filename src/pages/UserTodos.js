import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {getTogosInfo} from "../services/api.services";
import {UserTodosComponents} from "../components";
import './pages.css';

function UserTodos(props) {
    let {state: user} = useLocation()
    let [togos, setTogos] = useState([])
    console.log(user);
    useEffect(() => {
        getTogosInfo()
            .then(value => setTogos(value
                .filter(value => value.userId === user.id)))
    }, [user.id])

    return (
        <div className={'user-togos'}>
            {togos.map(value => <UserTodosComponents item={value} key={value.id}/>)}
        </div>
    );
}

export {UserTodos};