import { createSlice } from '@reduxjs/toolkit'

let CounterSlice = createSlice({
    name : "counter",
    initialState : 100,
    reducers : {
        inc(x, y){
            return x+y.payload;
            // state chaged into store
        },
        dec(a, b){
            return a-b.payload;
        },
        multi(state, action){
            return state*action.payload;
        },
        div(state, action){
            return state/action.payload;
        },
        reset(){
            return 0;
        }
        /*
            function(current_state, para.payload){

            }

        */
    }
});

export default CounterSlice.reducer;

export let { inc, dec, multi, div, reset  } = CounterSlice.actions;

/*

    inc(2)
    dec(2)

*/