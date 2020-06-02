import React from 'react';
import axios from 'axios';

class Employees extends React.Component {
    constructor(props) {
        super(props);
        this.source = this.props.source + "employees";
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get(this.source)
        .then((response) => {            
            this.setState({ employees: response.data });
        }).catch((err) => {
            console.log("error");
        });
    }

    render() {
        return (
            <div>
                {this.state.employees.map((e, i) => {
                    return (
                        
                    )
                })}
            </div>
        );
    }
}

export default Employees;
