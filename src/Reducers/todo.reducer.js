import uuid from "uuid/v4"

const reducer = (todos, action) => {
  switch (action.type) {
    case "ADD":
      return [...todos, {id:uuid(), task: action.task, completed:false }]
    case "REMOVE":
      return  todos.filter(todo => todo.id !== action.id);
    case "TOGGLE":
      return todos.map(todo => todo.id === action.id? {...todo, completed: !todo.completed}:todo);
    case "EDIT":
      return todos.map(todo=>
        todo.id === action.id ? {...todo, task:action.task}:todo)
    default:
      return todos;
  }
}

export default reducer;

//{type: "ADD", task: "Walk the Dog"}
//{type: "REMOVE", id:1231}
//{type:"TOGGLE", id:123123}
//{type:"EDIT", id:12312, newTask:"love wife"}

//refactor from below
// addTodos: newTodoText => {
//   setTodos([...todos, {id:uuid(), task: newTodoText, completed:false }])
// },
// removeTodo: todoId => {
//   const updatedTodo = todos.filter(todo => todo.id !== todoId);
//   setTodos(updatedTodo);
// },
// toggleTodo:todoId => {
//   const updateTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed}:todo);
//   setTodos(updateTodos);
// },
// editTodo:(todoId, newTask) => {
//   const updatedTodos = todos.map(todo=>
//     todo.id === todoId ? {...todo, task:newTask}:todo)
//     setTodos(updatedTodos);
// }