
import { Component } from 'react';
import TodoItem from './TodoItem'
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            todos: [],
            todoItem: '',
            actionType:'ADD',
            updatedIndex : 0
        };

    }
    onInputChange = e => {
        this.setState({ todoItem: e.target.value });
    }
    onClick = () => {

        if(this.state.todoItem === '')
        {
            return;
        }
        if(this.state.actionType ==="ADD")
        {
            console.log('ADD');
            const todos = [...this.state.todos, this.state.todoItem];
            this.setState({ todos: todos, todoItem:'' })
        }
       else if(this.state.actionType === "SAVE")
       {
           
           console.log('save');
           var todosTemp =  this.state.todos.slice();
           todosTemp[this.state.updatedIndex] =  this.state.todoItem;
           this.setState({todos : todosTemp});
           this.state.todoItem = '';
           this.state.actionType = "ADD";
       }
    }
    onRemoveClick = (i) => {
        let todoTemp = this.state.todos.slice();
        todoTemp.splice(i, 1);
        this.setState({ todos: todoTemp });
    }
    onUpdateClick = (i) =>{
        
        let todoTemp = this.state.todos[i];
        this.setState({updatedIndex:i});
        this.setState({todoItem:todoTemp});
        this.state.actionType = "SAVE";
       
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="ToDo"
                        iconClassNameRight="muidocs-icon-navigation-expand-more" />

                        <br />
                        <Badge
                            badgeContent={this.state.todos.length}
                            primary={true}
                        >
                            <NotificationsIcon />
                        </Badge>
                        
                    <AddTodo todoItem={this.state.todoItem} onInputChange = {this.onInputChange} actionType = {this.state.actionType} onClick = {this.onClick}/>
                    {/* <TextField hintText="Add Your Todo" fullWidth={true} value={this.state.todoItem} onChange={this.onInputChange} /><br />
                    <RaisedButton label={this.state.actionType} secondary={true} fullWidth={true} onClick={this.onClick} /> */}
                    <br />
                    <TodoList todos={this.state.todos} removeItem={this.onRemoveClick} updateItem={this.onUpdateClick} />
                </div>
            </MuiThemeProvider>
        );
    }
}



