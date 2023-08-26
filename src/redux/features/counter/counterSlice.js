import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count: 0,
}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment: (state)=>{
            state.count = state.count + 1
        },
        incrementNByValue: (state, actions)=>{
            state.count = state.count + actions.payload;
        },



        decrement: (state)=>{
            if (state.count <= 0) {
                state.count = 0
            }else{
                state.count = state.count - 1
            }
        }
    }
});

export const {increment, decrement, incrementNByValue} = counterSlice.actions;

export default counterSlice.reducer;
