

import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name :'counter',
    initialState:{
        count : 0
    },
    reducers:{
        add: (state)=>{
            state.count += 1 
        },
        sub: (state)=>{
            state.count -= 1 
        },
    }
})

export const {add , sub} = CounterSlice.actions
export const counterReducer2 = CounterSlice.reducer