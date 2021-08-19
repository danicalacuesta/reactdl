import React from "react";
//Import Components
import Todo from './Todo'

const TodoList = ({todos, setTodos, filteredTodos}) => {
    console.log(todos);
    //everytime you type and press enter, the text renders out
    return (
        <div className="todo-container">
            < ul className="todo-list">
                //this is where you add the todos
                {filteredTodos.map(todo=> (
                    <Todo //component with new styling 
                    setTodos={setTodos} 
                    todos={todos} 
                    key={todo.id} 
                    todo={todo}
                    text={todo.text}/>
                ))}
                //^^ curly brackets is where you can do java script code
            </ul>
        </div>
    );
};

export default TodoList;