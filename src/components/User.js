import React from 'react';
import {Link} from "react-router-dom";

import '../pages/pages.css';

function User({item}) {
    let {name, username, email, id} = item
    // console.log(item)
    return (
        <li><Link to={'togos~' + id.toString()} state={{...item}}>
            id ~ {id}
            name: {name}
            username:{username}
            email:{email}
        </Link>
        </li>



    );
}

export {User};