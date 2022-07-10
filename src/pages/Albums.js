import React, {useEffect, useState} from 'react';

import './pages.css';
import {getAlbumsInfo} from "../services/api.services";
import {AlbumsComponents} from "../components";
import {Outlet} from "react-router-dom";

function Albums(props) {
    let [albums, setAlbums] = useState([])
    useEffect(() => {
        getAlbumsInfo().then(value => setAlbums(value))
    })
    return (
        <ol>
            <Outlet/>
            {albums ? (albums.map(value => <AlbumsComponents albums={value} key={value.id}/>)):(<h1>Loading///</h1>)}
        </ol>

    );
}

export {Albums};