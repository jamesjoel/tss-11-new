import {createSlice} from '@reduxjs/toolkit'
let AdminAuthSlice = createSlice({
    name : "adminslice",
    initialState : false,
    reducers : {
        isLoggedInAdmin(state, action){
            return action.payload;
        }
    }
})

export default AdminAuthSlice.reducer;

export let { isLoggedInAdmin } = AdminAuthSlice.actions;