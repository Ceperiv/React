import React, {Component} from 'react';

import {commentService} from "../../services";
import {Comment} from "../comment/Comment";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {comments: []}
    }

    componentDidMount() {
        commentService.getInfo().then(({data})=>this.setState({comments: data}))
    }

    render() {
        return (
            <div>
                {this.state.comments.map(value => <Comment key={value.id} comment={value}/>)}
            </div>
        );
    }
}

export {Comments};