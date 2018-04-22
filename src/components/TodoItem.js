import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
const style = {
    float: 'right',
    marginTop: '-15px'
}
class TodoItem extends Component {
    render() {
        return (
            <ListItem>
                {this.props.todo}
            <IconButton 
                style={style} 
                onClick={() => { this.props.removeItem(this.props.index) }}> 
                <FontIcon className="fas fa-trash-alt" hoverColor="red" />
            </IconButton>
            <IconButton 
                style={style} 
                onClick={() => { this.props.updateItem(this.props.index) }}> 
                <FontIcon className="fas fa-edit" hoverColor="green" />
            </IconButton>
            
            </ListItem>
        );
    }
}
export default TodoItem;
