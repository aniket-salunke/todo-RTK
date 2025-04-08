import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Test" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action)=>{
            // state.todos = state.todos.map((todo)=> todo.id === action.payload.id ? {...todo, text: action.payload.text}: todo)
            state.todos = state.todos.map((todo)=> {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        text: action.payload.text
                    }
                } else {
                    return todo
                }
            })
        }

    }
})

export const {addTodo,updateTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer