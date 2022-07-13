import React, {Component} from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, name, email} = this.props.comment
        return (
            <div>
                <h4>{id} --- "{name}"</h4>
                <p>EMAIL: <i>{email}</i></p>
                <hr/>
            </div>
        );
    }
}

export {Comment};