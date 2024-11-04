import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello World"
        }
    ]
}

// We could also define the reducers outside and then pass the definition to the reduceres inside. 
// const addTodo = (state, action) => {
//     console.log("Add Todo");
// }
// const removeTodo = (state, action) => {
//     console.log("Removed Todo");
// }

// While exporting the slice, the name is the default prop from the redux side and the one which is initialValue which is the value at the
// first. You can either give the value here in the createSlice({}) method or you can defined it outside and then just give the name in the inside. 
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log("Added the Todo");
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        updateTodo: (state, action) => {
            const todoToUpdate = state.todos.find((todo) => todo.id === action.payload.id);
            if(todoToUpdate) {
                todoToUpdate.text = action.payload.text;
            }
        },
        removeTodo: (state, action) => {
            console.log("Removed the Todo");
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }
    }
})

// You have to export the individial reducer so that the store could recogize and update accordinally.
export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;

// And also the whole reducer object so that it can track it accross the multiple changes.
export default todoSlice.reducer;