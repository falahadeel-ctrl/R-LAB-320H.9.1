import { useReducer, useState } from 'react';
import TodoItem from './TodoItem.jsx';
import todoReducer from './todoReducer';
import './App.css'

const initialState =[ //array passed in userreducer and becomes first state
  {id: 1, title: "Buy groceries", completed: false},
  {id: 2, title: "Walk the dog", completed: false},
  {id: 3, title: "Do laudry", completed: true},
];
export default function App() {
 const[newTodo, setNewTodo]= useState("");
 const [todos, dispatch] = useReducer(todoReducer, initialState);

 function handleAdd(){
  if(newTodo.trim() === "") return ;
  dispatch({type: "add_todo", payload: {title: newTodo}});
  setNewTodo("");
 }
 const todoList = todos.map((todo)=>(
  <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
 ));
  return (
    <>
    <h1>Todo List</h1>
    <input 
    type="text"
    value={newTodo}
    onChange={(e)=> setNewTodo(e.target.value)}
    placeholder="Add a new todo..."
    />
    <button onClick={handleAdd}>Add</button>
    <ul>{todoList}</ul>
    </>
  );
}


