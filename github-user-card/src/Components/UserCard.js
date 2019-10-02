import React from 'react';
import {StyledDiv, ParentDiv, Image} from './Styles';

export default class UserCard extends React.Component {

    render() {
        const {avatar_url, bio, followers, following, name, login, url, organizations_url} = this.props.user;
        return (
            <ParentDiv>
                <StyledDiv>
                    <Image src={avatar_url} />
                    <p>Name: {name}</p>
                    <p>Username: {login}</p>
                    <p>Bio: {bio}</p>
                    <p>Followers: {followers}</p>
                    <p>Following: {following}</p>
                    <p>Organization: {organizations_url}</p>
                    <p>GitHub_Url: {url}</p>
                </StyledDiv>
            </ParentDiv>
        );
    }
}