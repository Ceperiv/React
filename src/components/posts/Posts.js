import React, {Component} from 'react';

import {postService} from "../../services";
import {Post} from "../post/Post";


class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {posts: []}
    }
    componentDidMount() {
        postService.getInfo().then(({data})=> this.setState({posts: data}))
    }

    render() {
        return (
            <div>
                {this.state.posts.map(value => <Post key={value.id} post={value}/>)}
            </div>
        );
    }
}

export {Posts};