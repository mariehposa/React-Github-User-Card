import React from 'react';
import './App.css';
import axios from 'axios';

const githubApi = 'https://api.github.com/users/mariehposa';
export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          usersDetails: {},
      };
  }

  componentDidMount() {
      axios.get(githubApi)
          .then(res => {
              console.log(res);
              this.setState({ usersDetails: res.data });
          });
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}