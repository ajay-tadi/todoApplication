import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getTodoAsync = createAsyncThunk("todo/getTodoAsync" , async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (response.ok) {
        const todo = await response.json()
        // console.log(todo);
        return  todo
    }
} )

 


let id=Date.now();
const todoSlice = createSlice({
    name:"todo",
    initialState:[
	],
    reducers:{
        addTask:(state,action) =>{
            return [
                ...state, {
                    id:id++,
                    title:action.payload.title ,
                    completed:false
                }
            ]
        },
        removeTask : (state,action) =>{
            return state.filter(task => task.id !== action.payload.id)
        },
        taskCompleted : (state,action) =>{
            return state.map(task => task.id === action.payload.id ? {...task, completed: !task.completed } : task )
        },
        
    },
    extraReducers : {
        [getTodoAsync.fulfilled] : (state,action)=>{
            console.log(action.payload);
            return action.payload
        }
    }
})

export const { addTask , removeTask, taskCompleted,fetchApiRequest} = todoSlice.actions ;

export default todoSlice.reducer ;