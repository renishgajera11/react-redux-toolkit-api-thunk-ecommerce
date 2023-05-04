import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const registerUser = createAsyncThunk('registerUser',async(result, {rejectWithValue})=>{

    const response = await fetch('https://641451f936020cecfda538c5.mockapi.io/users',{
        method : 'POST',
        headers : {
            'content-type' : "application/json",
        },
        body:JSON.stringify(result)
    }) ; 

    console.log(response);

            try {

                const dataResult = await response.json();
                return dataResult 
                
            } catch (error) {
                return rejectWithValue(error)
            }

})


const authSlice = createSlice({

    name:'register',
    initialState:{
        user:[],
        msg:"",
        token:"",
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:{

        [registerUser.pending] : (state) =>{
            state.loading = true;
       },
       [registerUser.fulfilled] : (state,action) => {
           state.loading = false;
           console.log(action.payload);
           state.user.push(action.payload);
       },
       [registerUser.rejected] : (state,action) =>{
           state.loading = false;
           state.error = action.payload.message
       },

    }
})

export const authAction = authSlice.actions;
export default authSlice.reducer; 