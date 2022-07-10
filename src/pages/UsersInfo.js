import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

import './pages.css';

function UserInfo(props) {
    return (
        <div className={'user-info'}>
            <h2>UserInfo</h2>
            <ul>
                <li><NavLink to={'users'}>Users</NavLink></li>
                <li><NavLink to={'albums'}>Albums</NavLink></li>

            </ul>
            <Outlet/>
            <hr/>
        </div>

    );
}

export {UserInfo};