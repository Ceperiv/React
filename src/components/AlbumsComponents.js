import React from 'react';

import './Components.css';
import {NavLink} from "react-router-dom";

function AlbumsComponents({albums}) {
    let {id, title} = albums
        return (

        <li>
            <NavLink to={'comments~' + id.toString()} state={{...albums}}>{title}</NavLink>

        </li>
    );
}

export {AlbumsComponents};