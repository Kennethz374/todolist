import React, {useContext} from 'react';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import {TodosContext} from "../Contexts/todos.context"
import Divider from "@material-ui/core/Divider";
import TodoItem from "./TodoItem"



export default function TodoList(){
  const todos = useContext(TodosContext)
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <TodoItem 
              {...todo}
              key={todo.id} 
              />
              {i < todos.length -1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
    return null;
}