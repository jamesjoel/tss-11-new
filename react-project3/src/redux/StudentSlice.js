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
    let response =await axios.post("http://localhost:8080/student/", obj);
    return response.data;
})

let updateStu = createAsyncThunk("update", async(obj)=>{ // { name : "vi", age : 20, id : 121 }
    await axios.put("http://localhost:8080/student/"+obj.id, obj)
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
        });
        builder.addCase(updateStu.fulfilled, (state, action)=>{ // action.payload = { name : "vi", age : 20, id : 121 }
            return state.map(value=>{
                if(value.id == action.payload.id)
                {
                    return action.payload;
                }
                else{
                    return value;
                }
            })
        })
    }
})

export default StudentSlice.reducer;

export { getAll, delStu, addStu, updateStu }