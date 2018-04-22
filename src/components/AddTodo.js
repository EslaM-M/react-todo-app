import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'


class AddTodo extends Component {
    render() {
        return (
            <div>
                <TextField hintText="Add Your Todo" 
                    fullWidth={true} 
                    value={this.props.todoItem} 
                    onChange={this.props.onInputChange} />
                <br/>
                <RaisedButton 
                    label={this.props.actionType} 
                    secondary={true} 
                    fullWidth={true} 
                    onClick={this.props.onClick} />
            </div>
        );
    }
}

export default AddTodo;

