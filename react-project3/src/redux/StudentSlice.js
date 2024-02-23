import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
let getAll = createAsyncThunk("getall", async()=>{
    let response = await axios.get("http://localhost:8080/student"); 
    return response.data;
})

let delStu = createAsyncThunk("del", async(obj)=>{
    await axios.delete("http://localhost:8080/student/"+obj.id);
    return obj;
});

let addStu = createAsyncThunk("add", async(obj)=>{
    await axios.post("http://localhost:8080/student/", obj);
    return obj;
})

let StudentSlice = createSlice({
    name : "student",
    initialState : [],
    extraReducers : builder =>{
        builder.addCase(getAll.fulfilled, (state, action)=>{
            return action.payload;
        });
        builder.addCase(delStu.fulfilled, (state, action)=>{
            return state.filter(value=>value.id != action.payload.id);
        });
        builder.addCase(addStu.fulfilled, (state, action)=>{
            state.push(action.payload);
        })
    }
})

export default StudentSlice.reducer;

export { getAll, delStu, addStu }