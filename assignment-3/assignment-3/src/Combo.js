import React from 'react';
import MultiSelect from "@khanacademy/react-multi-select";

class Combo extends React.Component {
    state = {
        selected: []
    }

    render() {
        const {selected} = this.state;

    return <MultiSelect
        options={this.props.options}
        selected={selected}
        onSelectedChanged={selected => this.setState({selected})}
        />
    }
}

export default Combo;