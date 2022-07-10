import React from 'react';

import '../pages/pages.css';

function UserTodosComponents({item}) {
    return (
        <p>
            - {item.title}
        </p>
    );
}

export {UserTodosComponents};