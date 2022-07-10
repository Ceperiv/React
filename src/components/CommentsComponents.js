import React from 'react';

import './Components.css'

function CommentsComponents({comment}) {
    let {name, body, email} = comment
    return (
        <div className={'components'}>
            <h4>name ~ {name}</h4>
            <h4>body - {body}</h4>
            <p>email: <i>{email}</i></p>
            <hr/>

        </div>
    );
}

export {CommentsComponents};