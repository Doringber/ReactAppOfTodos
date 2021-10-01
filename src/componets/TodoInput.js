import React, { useState } from "react";
import Button from "../UI/Button";

const TodoInput = (props) =>{
    const [enteredValue, setEnteredValue] = useState("");

    const TodoInputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddGoal(enteredValue);  
      }; 

    return(
        <form onSubmit={formSubmitHandler}>
            <div className='form-control'>
                <label>Todo List</label>
                <input type='text' onChange={TodoInputChangeHandler}/>
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default TodoInput