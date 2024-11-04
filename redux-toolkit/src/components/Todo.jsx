import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const [editingId, setEditingId] = useState(null); // ID of the todo being edited
    const [editText, setEditText] = useState('');      // Temporary text for editing

    const handleDeleteTodo = (id) => {
        dispatch(removeTodo(id));
    };

    const handleEditTodo = (id, text) => {
        setEditingId(id);
        setEditText(text);
    };

    const handleUpdateTodo = (id) => {
        dispatch(updateTodo({ id, text: editText }));
        setEditingId(null);
        setEditText('');
    };

    return (
        <div className="space-y-4">
            {
                todos.map((todo) => (
                    <div
                        key={todo.id}
                        className="bg-white p-4 rounded-md shadow-md flex justify-between items-center"
                    >
                        <div className="flex items-center">
                            {editingId === todo.id ? (
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className="border p-2 rounded"
                                />
                            ) : (
                                <span>{todo.text}</span>
                            )}
                        </div>
                        {editingId === todo.id ? (
                            <button onClick={() => handleUpdateTodo(todo.id)}>Update</button>
                        ) : (
                            <>
                                <button onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
                                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                            </>
                        )}
                    </div>
                ))
            }
        </div>
    );
};

export default TodoList;
