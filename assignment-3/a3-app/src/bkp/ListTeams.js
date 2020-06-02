import React from 'react';
import TeamCard from './TeamCard';

class ListTeams extends React.Component {
    render() {
        const teams = []
        for (let i = 0; i < 5; i++) {
            teams.push(<TeamCard id={i + 1} />);
        }
        return (
            <div>{teams}</div>
        )
    }
}

export default ListTeams;