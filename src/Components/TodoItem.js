import React, {useContext} from 'react';
import useToggle from "../Hooks/useToggle"
import EditForm from "./EditForm"
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {TodosContext} from "../Contexts/todos.context"


export default function TodoItem({id, task, completed}) {
  const {removeTodo, toggleTodo}= useContext(TodosContext)
  const [Editing, toggle] = useToggle(false);
  return (
    <ListItem style={{height: "64px"}}>
      {Editing ? <EditForm id={id} task={task} toggle={toggle}/> :
      <>
      <Checkbox tabIndex={-1} checked={completed} onClick={()=>toggleTodo(id)}/>
      <ListItemText 
        style={{textDecoration: completed? "line-through":"none"}}
      >
      {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='Delete'>
          <DeleteIcon onClick={()=>removeTodo(id)}/>
        </IconButton>
        <IconButton aria-label='Edit'>
          <EditIcon onClick={toggle}/>
        </IconButton>
      </ListItemSecondaryAction>
      </>
      }
    </ListItem>
  )
}