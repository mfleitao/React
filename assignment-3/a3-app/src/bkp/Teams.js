import React from 'react';

class Teams extends React.Component {
    state = {
        teams: []
    }
    componentDidMount() {
        fetch('https://floating-everglades-82678.herokuapp.com/teams')
        .then(response => {
            if (!response.ok)
                throw new Error(response.statusText);
            return response.json();
        })
        .then(data => {
            return teams;
        });
    }
    render() {

    }
}

export default Teams;
