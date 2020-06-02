import React, { Component } from 'react';
import axios from 'axios';

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        event.preventDefault();

    }

    componentDidMount() {
        fetch("https://floating-everglades-82678.herokuapp.com/teams")
        .then(response => response.json())
        .then(data => {
            this.setState({ teams: data });
        })
        .catch(err => {
            console.log('error');
        });
    }

    /*
    componentDidMount() {
        axios.get("https://floating-everglades-82678.herokuapp.com/teams")
        .then((response) => {
            this.setState({
                teams: response.data
            });
        })
        .catch((err) => {
            console.log("error");
        })
    }
    */

    render() {
        return (
            <div>
                <h4>Teams</h4>
                {this.state.teams.map((t, i) => {
                    return <p>{t.TeamName}</p>;
                })}
            </div>
        );
    }
}

export default Car;