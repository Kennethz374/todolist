import uuid from "uuid/v4";
import useLocalStorageState from "./useLocalStorageState";

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState("todo", initialTodos);
  return {
    todos,
    addTodos: newTodoText => {
      setTodos([...todos, {id:uuid(), task: newTodoText, completed:false }])
    },
    removeTodo: todoId => {
      const updatedTodo = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedTodo);
    },
    toggleTodo:todoId => {
      const updateTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed}:todo);
      setTodos(updateTodos);
    },
    editTodo:(todoId, newTask) => {
      const updatedTodos = todos.map(todo=>
        todo.id === todoId ? {...todo, task:newTask}:todo)
        setTodos(updatedTodos);
    }
  }
}
// const addTodos = newTodoText => {
//   setTodos([...todos, {id:uuid(), task: newTodoText, completed:false }])
// }
// const removeTodo = todoId => {
//   const updatedTodo = todos.filter(todo => todo.id !== todoId);
//   setTodos(updatedTodo);
// }
// const toggleTodo = todoId => {
//   const updateTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed}:todo);
//   setTodos(updateTodos);
// }

// const editTodo = (todoId, newTask) => {
//   const updatedTodos = todos.map(todo=>
//     todo.id === todoId ? {...todo, task:newTask}:todo)
//     setTodos(updatedTodos);
// }