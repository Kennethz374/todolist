import React, {useContext} from 'react'
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "../Hooks/useInputState"
import {DispatchContext} from "../Contexts/todos.context"

export default function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);
  return (
    <Paper style={{ margin:'1rem 0', padding:'0 1rem'}}>
      <form onSubmit={e=> {
        e.preventDefault();
        // addTodos(value);
        dispatch({type:"ADD", task: value})
        reset();
      }}>
      <TextField 
      value={value} 
      onChange={handleChange} 
      margin='normal' 
      label='Add New Todo' 
      fullWidth/>
      </form>
    </Paper>
  )
}