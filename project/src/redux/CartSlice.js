import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL } from '../util/API_URL';
let add =  createAsyncThunk("add", async(info)=>{
    await axios.post(`${API_URL}cart`, info, {
        headers : { Authorization : localStorage.getItem("access-token")}
    });
    return info;
})

let getAllData = createAsyncThunk("getall", async()=>{
    let response = await axios.get(`${API_URL}cart`, {
        headers : {Authorization : localStorage.getItem("access-token")}
    })
    // console.log(response.data.result);
    let arr = response.data.result.map(value=>value.product);
    // console.log(arr);
    return arr;
})

let clear = createAsyncThunk("clear", async()=>{
    let response = await axios.delete(`${API_URL}cart`, {
        headers : {Authorization : localStorage.getItem("access-token")}
    })
})


let CartSlice = createSlice({
    name : "cart",
    initialState : [],
    // reducers : {
    //     add(state, action){
    //         state.push(action.payload)
    //     },
    //     clear(state, action){
    //         return [];
    //     },
    //     clearOne(state, action){
    //         return state.filter(value=>value._id!=action.payload._id);
    //     }
    // }
    extraReducers : builder =>{
        builder.addCase(add.fulfilled, (state, action)=>{
            state.push(action.payload)
        });
        builder.addCase(getAllData.fulfilled, (state, action)=>{
            return action.payload;
        });
        builder.addCase(clear.fulfilled, ()=>{
            return [];
        })
        
    }
});

export default CartSlice.reducer;

// export let { add, clear, clearOne } = CartSlice.actions;
export {add, getAllData, clear};