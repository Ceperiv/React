import React from 'react';

function User({user}) {

    let {id, name, username, email} = user
    return (
        <div>
            userId:{id}
            name:{name}
            uaername:{username}
            email:{email}

        </div>
    );
}

export {User};