import React from 'react';
import { StyledDiv, ParentDiv, Image } from './Styles';

export default class FollowersCard extends React.Component {
   
    render() {
        const {avatar_url, organizations_url, login} = this.props.user;
        return (
            <ParentDiv>
                <StyledDiv>
                    <Image src={avatar_url} />
                    <p>Username: {login}</p>
                    <p>Organizations: {organizations_url}</p>
                </StyledDiv>
            </ParentDiv>
        );
    }
}