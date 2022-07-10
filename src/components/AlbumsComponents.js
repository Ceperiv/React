import React from 'react';
import {NavLink} from "react-router-dom";

import './Components.css';

function AlbumsComponents({albums}) {
    let {id, title} = albums
        return (

        <li>
            <NavLink to={'comments~' + id.toString()} state={{...albums}}>{title}</NavLink>

        </li>
    );
}

export {AlbumsComponents};