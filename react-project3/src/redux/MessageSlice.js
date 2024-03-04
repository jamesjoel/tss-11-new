import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
let getAllMsg = createAsyncThunk("getall", async()=>{
    let response = await axios.get("http://localhost:8080/message");
    return response.data;
})

let sendMsg = createAsyncThunk("send", async(obj)=>{
    let response = await axios.post("http://localhost:8080/message", obj);
    return response.data;
})

let MessageSlice = createSlice({
    name : "message",
    initialState : [],
    extraReducers : builder =>{
        builder.addCase(getAllMsg.fulfilled, (state, action)=>{
            return action.payload;
        });
        builder.addCase(sendMsg.fulfilled, (state, action)=>{
            state.push(action.payload);
        })
    }
    // reducers : {
    //     sendMsg(state, action){
    //         state.push(action.payload);
    //     }
    // }
})

export default MessageSlice.reducer
export {getAllMsg, sendMsg}
