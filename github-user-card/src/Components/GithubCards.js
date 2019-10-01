import React, { useState, useEffect } from 'react';
import axios from 'axios';

const githubApi = 'https://api.github.com/users/';

export default class GitHubUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersDetails: {},
        };
    }
}