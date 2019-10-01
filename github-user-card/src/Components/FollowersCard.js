import React from 'react';

export default class FollowersCard extends React.Component {
    constructor (props) {
        super(props);

    }

    
    render() {
        const {avatar_url, bio, organizations_url, followers, following, name, login, url, email} = this.props.user;
        return (
            <div>
                <img src={avatar_url} />
                <p>Name: {name}</p>
                <p>Username: {login}</p>
                <p>Followers: {followers}</p>
                <p>Following: {following}</p>
                <p>Organizations: {organizations_url}</p>
            </div>
        );
    }
}