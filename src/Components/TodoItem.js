import React, {useContext, memo} from 'react';
import useToggle from "../Hooks/useToggle"
import EditForm from "./EditForm"
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {DispatchContext} from "../Contexts/todos.context"


function TodoItem({id, task, completed}) {
  const dispatch = useContext(DispatchContext)
  const [Editing, toggle] = useToggle(false);
  return (
    <ListItem style={{height: "64px"}}>
      {Editing ? <EditForm id={id} task={task} toggle={toggle}/> :
      <>
      <Checkbox tabIndex={-1} checked={completed} onClick={()=>dispatch({type:"TOGGLE",id:id})}/>
      <ListItemText 
        style={{textDecoration: completed? "line-through":"none"}}
      >
      {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='Delete'>
          <DeleteIcon onClick={()=>dispatch({type:"REMOVE",id:id})}/>
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

export default memo(TodoItem);