import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();

        if(todoText === "") {
            alert("Please write some text");
            return;
        }
        dispatch(addTodo(todoText));
        alert("Todo Added");
        setTodoText("");
    };

    return (
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    placeholder="Add a new todo"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type='submit'
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default AddTodo;