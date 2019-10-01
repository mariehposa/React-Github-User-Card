import React from 'react';

export default class UserCard extends React.Component {
    constructor (props) {
        super(props);

    }

    
    render() {
        const {avatar_url, bio, followers, following, name, login, url, email} = this.props.user;
        return (
            <div>
                <img src={avatar_url} />
                <p>Name: {name}</p>
                <p>Username: {login}</p>
                <p>Bio: {bio}</p>
                <p>Email: {email}</p>
                <p>Followers: {followers}</p>
                <p>Following: {following}</p>
                <p>GitHub_Url: {url}</p>
            </div>
        );
    }
}