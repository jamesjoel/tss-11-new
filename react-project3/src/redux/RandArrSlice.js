import { createSlice } from '@reduxjs/toolkit'

let RandArrSlice = createSlice({
    name : "randarr",
    initialState : [],
    reducers : {
        genArr(state, action){
            let a = action.payload.total; // 5
            let b = action.payload.hino; // 20
            let arr = [];
            for(let i = 1; i <= a; i++)
            {
                let x = Math.random()*b; // 13.3215546
                let y = Math.floor(x); // 13
                if(arr.indexOf(y) >= 0){
                    let x = Math.random()*b; // 13.3215546
                    let y = Math.floor(x);
                    arr.push(y);
                }else{
                    arr.push(y); // [7]
                }
                
            }
            return arr;
        }
    }
})
export default RandArrSlice.reducer;
export let {genArr} = RandArrSlice.actions;