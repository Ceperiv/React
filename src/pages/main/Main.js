import {Outlet, Link} from 'react-router-dom'
import React from 'react';

import './main.css';


function Main(props) {
    return (
        <div>
            <hr/>

            <button><Link to={'posts'}>Posts</Link></button>
            <button><Link to={'comments'}>Comments</Link></button>

            <Outlet/>
        </div>
    );
}

export {Main};