import React from 'react';

function Rocket({item}) {
    return (
        <div className={'info'}>
            <h2>Mission name: {item.mission_name}</h2>
            <h2>Year: {item.launch_year}</h2>
            <a href={item.links.video_link}> <img src={item.links.mission_patch_small} alt={item.mission_name}/></a>

        </div>
    );
}

export {Rocket};