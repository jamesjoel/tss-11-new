import { createSlice } from '@reduxjs/toolkit'



let data = [
    {
        id : 1,
        name : "rohit",
        salary : 5000
    },
    {
        id : 2,
        name : "amar",
        salary : 6000
    }
]

let EmployeeSlice = createSlice({
    name : "emp",
    initialState : data,
    reducers : {
        add(state, action){
            let n = state.length;
            n++;
            action.payload.id = n;
            state.push(action.payload);
        },

        del(state, action){
            return state.filter(value=>value.id != action.payload.id);
        }
    }
})


export default EmployeeSlice.reducer;

export let {add, del} = EmployeeSlice.actions;