import { createSlice } from '@reduxjs/toolkit'

let UserAuthSlice = createSlice({
    name : "userauth",
    initialState : false,
    reducers : {
        isLoggedin(state, action){
            return action.payload;
        }
    }
})

export default UserAuthSlice.reducer;
export let { isLoggedin } = UserAuthSlice.actions;