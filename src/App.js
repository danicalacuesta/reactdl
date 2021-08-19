import React, { useState,useEffect } from "react"; 
//what useState does is it imports something specific from the react library
import "./App.css";
//Importing Components
import Form from "./component/Form";
import TodoList from "./component/TodoList";

function App(){
  //state stuff
  const [inputText, setInputText]= useState("");
  //inputText is actual value while the setInputText function that allows us to change the value/inputtext
  //store todos, create and array to store objects
  const [todos, setTodos]= useState([]);
  const [status, setStatus ] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);
  //use effect
  useEffect(() =>{
    filterHandler();
    saveLocalTodos();
  }, [todos,status]);
  //functions
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed===true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed===false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
    
  };

//save to local
const saveLocalTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
  
};
const getLocalTodos = () => {
  if(localStorage.getItem("todos")===null) {
    localStorage.setItem("todos", JSON.stringify([]));
  }else{
   let todoLocal = JSON.parse(localStorage.getItem("todos"));
   setTodos(todoLocal);
  }
};
  return (
    <div className="App">
      <header>
    <h1>Danica's Todo List</h1>
      </header>
      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos}  
      setInputText={setInputText}
      setStatus={setStatus}
      />
      <TodoList 
      filteredTodos={filteredTodos}
      setTodos={setTodos} 
      todos={todos} />
    </div>
  );
}

export default App;