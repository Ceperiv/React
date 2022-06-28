import logo from './logo.svg';
import './App.css';
import User from "./components/user/User";
import Users from "./components/users/Users";
import {getPosts, getUsers} from "./services/post.api";
import {useState} from "react";
import Posts from "./components/posts/Posts";

function App() {
    let [posts, setPosts] = useState([])

    const userId = (id) => {
        getPosts(id).then(({data}) => setPosts([...data]))
    }
    return (<div className={'wrap'}>
            <Users userId={userId}/>
            <div className={'posts'}><Posts posts={posts.map(value => `--- ${value.body}`)}/></div>
        </div>

    );
}

export default App;
