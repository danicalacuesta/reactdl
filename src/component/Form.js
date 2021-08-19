//Form.js the component where you input your task & where you can find the drop down of which tasks are completed,
// not completed and all
import React from "react";
//^^importing React lets the file know we are using React(react from mode modules)
const Form = ({ setInputText,todos,setTodos, inputText, setStatus}) => {
  //where I can write javascript code and functions
  //e is the event(basically tells what just happened)
    const inputTextHandler = (e) => {
      console.log(e.target.value)
      //getting the value of the target gets exactly what you type in the input box and not weird shenanigans
      setInputText(e.target.value);
    }; 
    const submitTodoHandler = (e) => {
      e.preventDefault();
      //^^this stops the page from refreshing once you press the plus
      //^^which is why we added it to the form
      setTodos([
        ...todos, 
        //^^passes todos in the list
        { text: inputText, completed: false, id: Math.random() * 1000 }
        //creates an object as false with random id and text
      ]);
      setInputText("");
      //reset the state back to zero
    };
const statusHandler = (e) => {
  setStatus(e.target.value);
};
    return(
    <form>
      <input 
      value= {inputText} 
      //^^matches the state with text
      onChange ={inputTextHandler} 
      //everytime the input changes the form function is being ran
      type="text" 
      className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange = {statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;