import { createSlice } from '@reduxjs/toolkit'

let CartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        add(state, action){
            state.push(action.payload)
        },
        clear(state, action){
            return [];
        },
        clearOne(state, action){
            return state.filter(value=>value._id!=action.payload._id);
        }
    }
});

export default CartSlice.reducer;

export let { add, clear, clearOne } = CartSlice.actions;