import React from 'react';

class TeamCard extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">Team {this.props.id}</div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Save</a>
                </div>
            </div>
        );
    }
}

export default TeamCard;