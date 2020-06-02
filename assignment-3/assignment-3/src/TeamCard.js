import React from 'react';
import Combo from './Combo';

class TeamCard extends React.Component {
    render() {
        const employees = [];
        const projects = [];
        let styles = { width: '21.8rem' };
        return (
            <div className="card mb-3" style={styles}>
                <div className="card-header">
                    {this.props.id}
                </div>
                <div className="card-body small">
                    <p className="card-title">Team Lead
                    <Combo options={employees}  />
                    </p>

                    <p className="card-title">Team Members
                    {this.props.employees.map((e, i) => {
                        employees.push({ 
                            label: e.FirstName +' '+ e.LastName, 
                            value: e._id 
                        });
                    })}
                    <Combo options={employees} />
                    </p>

                    <p className="card-title">Projects
                    {this.props.projects.map((p, i) => {
                        projects.push({ 
                            label: p.ProjectName, 
                            value: p._id 
                        });
                    })}
                    <Combo options={projects} />
                    </p>

                    <a href="#" className="btn btn-primary btn-sm">Save</a>

                </div>
            </div>
        );
    }
}

export default TeamCard;