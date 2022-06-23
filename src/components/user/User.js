import React from 'react';

function User({item}) {
    return (
        <div>
            <h4>{item.id}</h4>
            <h2>{item.name}</h2>
        </div>
    );
}

export {User};