import React, {useState} from "react";
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Grid from "@material-ui/core/Grid";


export default function TodoApp() {
  const initialTodos = [
    {id: 1, task: "Buy Groceries", completed: false},
    {id: 2, task: "Study React", completed: false},
    {id: 3, task: "Confirm Emails", completed: true},
    {id: 4, task: "Buy toys for Evie", completed: true},
    {id: 5, task: "Dimsum with Mom", completed: false},
  ]
  const [todos, setTodos] = useState(initialTodos)

  return (
    <Paper 
      style={{
        padding:0,
        margin:0,
        height:"100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    > 
      <AppBar color='primary' position='static' style={{ height: "64px" }}>
        <ToolBar>
          <Typography color='inherit'> ToDos With Hooks</Typography>
        </ToolBar>
      </AppBar>

      <TodoForm />

      <TodoList todos={todos} />

    </Paper>
  )
};

// -TodoApp  manage states
//   -TodoForm
//   -TodoList
//     -ToDoItem