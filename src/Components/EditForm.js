import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "../Hooks/useInputState"
import useToggle from "../Hooks/useToggle";

export default function EditForm({editTodo,id, task,toggle}) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form onSubmit={(e)=>
    {e.preventDefault();
    editTodo(id,value);
    reset();
    toggle();
    }}>
    <TextField margin="normal" value={value} onChange={handleChange} fullWidth></TextField>
    </form>
  )
}