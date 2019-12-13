//todos
//all methods to interact with todos

import React, {createContext} from "react";
import useTodoState from "../Hooks/useTodoState"
const defaultTodos = [
  {id:1, task: "make notes for node.js", completed:false},
  {id:2, task: "finish cover letter", completed:false},
  {id:3, task: "study React.js redux", completed:true}
]

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todoStuff = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value ={todoStuff}>
      {props.children}
    </TodosContext.Provider>
  )
}