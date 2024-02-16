import { createSlice } from '@reduxjs/toolkit'

let CartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        add(state, action){
            state.push(action.payload)
        }
    }
});

export default CartSlice.reducer;

export let { add } = CartSlice.actions;