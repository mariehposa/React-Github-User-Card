import React from 'react';
import FollowersCard from './FollowersCard';

export default class FollowersList extends React.Component {
    
    render() {

        return (
            <div>
                {
                    this.props.followers.map(follower => <FollowersCard user = {follower} /> )
                }
            </div>
        );
    }
}