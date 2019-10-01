import React from 'react';

export default class FollowersCard extends React.Component {
    constructor (props) {
        super(props);

    }

    
    render() {
        const {avatar_url, organizations_url, login} = this.props.user;
        return (
            <div>
                <img src={avatar_url} />
                <p>Username: {login}</p>
                <p>Organizations: {organizations_url}</p>
            </div>
        );
    }
}