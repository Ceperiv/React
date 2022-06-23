import React from 'react';

function User({item, userButton}) {
    return (
        <ol>
            <li className={'li-el'}>{item.id}</li>

            <li>{item.name}</li>
            <button onClick={() => {
                userButton(item)
                // document.querySelector('.user_details').after(document.querySelector('.box'))

            }}>details
            </button>
        </ol>
    );
}


export {User};