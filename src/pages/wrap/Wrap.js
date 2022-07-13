import React from 'react';
import {NavLink} from "react-router-dom";

function Wrap(props) {
    return (
        <div>
            <h2>Lesson 006 "Class Components"</h2>

            <ul>
                <li><NavLink className={'menu'} to={'/'}>Home</NavLink></li>
                <li><NavLink className={'menu'} to={'/main'}>Main Menu</NavLink></li>
            </ul>
        </div>
    );
}

export {Wrap};