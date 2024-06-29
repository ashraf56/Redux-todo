import { PayloadAction, createSlice } from "@reduxjs/toolkit";

 type Ttodo = {
    id:string
    title:string
    description:string
    isCompleted?:boolean
}

  type InitialState = { 
    todos:Ttodo[]
}

 const initialState:InitialState = {
    todos:[],
}

 const todoslice = createSlice({
    name:"todo",
    initialState,
    reducers:{
    addtodo : (state, action:PayloadAction<Ttodo>) => {  
     state.todos.push({ ...action.payload, isCompleted:false})
    },
removeTodo: (state, action:PayloadAction<string>) =>{
 
}

    }

})


export const {addtodo,removeTodo} = todoslice.actions

export default todoslice.reducer