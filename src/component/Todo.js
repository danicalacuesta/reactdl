import React, { isValidElement } from 'react';

const Todo = ({text,todo, todos, setTodos}) => {
    //Events
    const deleteHandler =()=> {
        //^^delete button that modifies the state
        setTodos(todos.filter((el) => el.id !== todo.id)); 
        //^^filter state out to find an element to whatever we clicked on (get rid of it if it matches)
        //el=element
    };

    const completeHandler = () => {
      setTodos(
        todos.map(item => {
            if(item.id===todo.id){
                return{
                    ...item, completed: !item.completed
                    //! flips property
                };
            }
            return item;
            //return state the way it was if it does not meet if statement
        })
      );
    };

    return (
        //jsx code at bottom
        //basic styling and text
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" :" "} `}>
                //crosses off text when completed
                {text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check" ></i>
            </button>
            <button  onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;