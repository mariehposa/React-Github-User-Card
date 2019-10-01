import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './Components/UserCard';
import FollowersList from './Components/FollowersList';

const githubApi = 'https://api.github.com/users/mariehposa';
export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          usersDetails: {},
          followers: [],
      };
  }

  componentDidMount() {
      axios.get(githubApi)
          .then(res => {
              //console.log(res.data);
              this.setState({ usersDetails: res.data });
              axios.get(res.data.followers_url)
                .then( res => {
                  console.log(res.data);
                  this.setState({ followers: res.data})
                })
          })
          .catch(err => {
            console.log(err.message);
          });
  }

  render() {
    return (
      <div className="App">
        <UserCard user={this.state.usersDetails} />
        <FollowersList follower={this.state.followers} />
      </div>
    );
  }
}