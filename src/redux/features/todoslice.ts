import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Ttodo = {
    id: string
    title: string
    description: string
    isCompleted?: boolean,
    priority: "high" | "low" | "medium"
}

type InitialState = {
    todos: Ttodo[]
}

const initialState: InitialState = {
    todos: [],
}

const todoslice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addtodo: (state, action: PayloadAction<Ttodo>) => {
            state.todos.push({ ...action.payload })
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);

        },
        togggleCompleted: (state, action: PayloadAction<string>) => {
            const task = state.todos.find(item => item.id === action.payload)
            task!.isCompleted = !task?.isCompleted
        }

    }

})


export const { addtodo, removeTodo, togggleCompleted } = todoslice.actions

export default todoslice.reducer