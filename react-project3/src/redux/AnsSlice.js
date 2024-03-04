import { createSlice } from '@reduxjs/toolkit'
let AnsSlice = createSlice({
    name : "ans",
    initialState : [],
    reducers : {
        addAns(state, action){
            state.push(action.payload);
        }
    }
})

export default AnsSlice.reducer;

export let {addAns} = AnsSlice.actions;