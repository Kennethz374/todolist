//todos
//all methods to interact with todos

import React, {createContext, useReducer} from "react";
import todoReducer from "../Reducers/todo.reducer"
const defaultTodos = [
  {id:1, task: "make notes for node.js", completed:false},
  {id:2, task: "finish cover letter", completed:false},
  {id:3, task: "study React.js redux", completed:true}
]

export const DispatchContext = createContext();
export const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos)
  return (
    <TodosContext.Provider value ={todos}>
      <DispatchContext.Provider value= {dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}