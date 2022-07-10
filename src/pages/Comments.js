import React, {useEffect, useState} from 'react';

import './pages.css';
import {useLocation, useNavigate} from "react-router-dom";
import {getCommentsInfo} from "../services/api.services";
import {CommentsComponents} from "../components";

function Comments(props) {

    let {state: album} = useLocation()
    // console.log(album)
    let [comments, setComments] = useState([])
    useEffect(() => {
        getCommentsInfo()
            .then(value => setComments(value
                .filter(value => value.postId === album.id)))
    }, [album.id])

    return (
        <div>
            {comments ? (comments.map(value => <CommentsComponents key={value.id} comment={value}/>)) :
                (<h1>Loading///////</h1>)}
        </div>
    );
}

export {Comments};