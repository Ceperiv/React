import React from 'react';

function UserDetails({user}) {

    let xxx = document.createElement('div')
    console.log();

    return (
        <div className={'user_details'}>
            <h4>{user.id}</h4>
            <h4>{user.name}</h4>
            <h4>{user.address.city}</h4>
            <h4>{user.address.street}</h4>
        </div>
    );

}

export {UserDetails};