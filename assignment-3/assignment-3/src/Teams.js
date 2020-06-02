import React from 'react';
import axios from 'axios';
import TeamCard from './TeamCard';

class Teams extends React.Component {
    constructor(props) {
        super(props);
        this.source = this.props.source + "teams";
        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        axios.get(this.source)
        .then((response) => {            
            this.setState({ teams: response.data });
        }).catch((err) => {
            console.log("error");
        });
    }

    render() {
        return (
            <div className="card-deck">
                {this.state.teams.map((t, i) => {
                    return (
                        <div>
                            <TeamCard 
                                id={t.TeamName} 
                                teamLead={t.teamLead}
                                projects={t.Projects} 
                                employees={t.Employees} />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Teams;
