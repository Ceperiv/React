import {useEffect, useState} from 'react';
import {getUsers} from "../../services/post.api";
import User from "../user/User";

export default function Users({userId}) {

    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
            .then(({data}) => setUsers([...data]))
    }, [])

    return (

              <div>
                  <iframe src="https://embed.api.video/vod/vi46MtoHUNW0LEzN4LBrVBiw" width="100%" height="100%"
                          frameBorder="0" scrolling="no" allowFullScreen="true">люкс</iframe>
                  {users.map((value) => <User key={value.id}
                                              item={value}
                                              userId={userId}/>)}</div>

    );
}