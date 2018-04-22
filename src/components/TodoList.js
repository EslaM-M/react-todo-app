import React, { Component } from 'react';
import TodoItem from './TodoItem'
import { List } from 'material-ui/List';

class TodoList extends Component {
    render() {
        return (
            <div>
                <List>
                    {
                        this.props.todos.map((e, i) =>
                            <TodoItem todo={e} index={i} key={i} removeItem={this.props.removeItem} updateItem={this.props.updateItem} />
                        )
                    }
                </List>
            </div>
        );
    }
}

export default TodoList;
