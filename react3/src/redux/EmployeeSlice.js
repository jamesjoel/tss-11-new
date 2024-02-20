import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

let API_URL = "http://localhost:8080/api/emp"
let getAllEmp = createAsyncThunk("getall", async()=>{
    let response = await axios.get(API_URL);
    console.log(response);
    return response.data.result; // { returl : []  }
});

let addEmp = createAsyncThunk("save", async(obj)=>{
    await axios.post(API_URL, obj);
    return obj;
})

let delEmp = createAsyncThunk("delete", async(obj)=>{
    await axios.delete(API_URL+"/"+obj._id);
    return obj;
})





let EmployeeSlice = createSlice({
    name : "emp",
    initialState : [],
    // reducers : {
    //     add(state, action){
    //         let n = state.length;
    //         n++;
    //         action.payload.id = n;
    //         state.push(action.payload);
    //     },

    //     del(state, action){
    //         return state.filter(value=>value.id != action.payload.id);
    //     }
    // }
    extraReducers : builder =>{
        builder.addCase(getAllEmp.fulfilled, (state, action)=>{
            return action.payload;
        });
        builder.addCase(addEmp.fulfilled, (state, action)=>{
            state.push(action.payload);
        });
        builder.addCase(delEmp.fulfilled, (state, action)=>{
            return state.filter(value=>value._id != action.payload._id);
        })
    }
})


export default EmployeeSlice.reducer;

export {addEmp, getAllEmp, delEmp};