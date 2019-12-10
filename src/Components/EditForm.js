import React, {useContext} from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "../Hooks/useInputState"
import { TodosContext } from "../Contexts/todos.context";

export default function EditForm({id, task,toggle}) {
  const {editTodo}= useContext(TodosContext)
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form 
      onSubmit={(e)=>
        {e.preventDefault();
        editTodo(id,value);
        reset();
        toggle();
      }}
      style={{ marginLeft:"1rem", width: "80%"}}
    >
    <TextField margin="normal" value={value} onChange={handleChange} fullWidth autoFocus></TextField>
    </form>
  )
}