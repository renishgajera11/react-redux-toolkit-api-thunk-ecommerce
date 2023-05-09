import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const loginSlice = createSlice({

    name:"login",
    initialState:{
        loginData:[],
        loading:false,
        isActive:false
    },
    reducers:{

        addItem(state,action){

            // console.log(action.payload);
          state = state.loginData.push(action.payload)
          
        },

        removeItem(state,action){
            state.loginData = []
        }

    }
})

export const { addItem , removeItem} = loginSlice.actions;
export default loginSlice.reducer;