import { createSlice,  createAsyncThunk } from "@reduxjs/toolkit";

export const createApi = createAsyncThunk('createApi', async (result, {rejectWithValue}) => {

    const response = await fetch('https://641451f936020cecfda538c5.mockapi.io/products',{
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

} );

export const readApi = createAsyncThunk('readApi', async (result, {rejectWithValue}) => {

    const response = await fetch('https://641451f936020cecfda538c5.mockapi.io/products') ; 

        try {
            const dataResult = await response.json();
            return dataResult 
            
        } catch (error) {
            return rejectWithValue(error)
        }

} );

export const deleteApi = createAsyncThunk('deleteApi', async (id, {rejectWithValue}) => {

    const response = await fetch(`https://641451f936020cecfda538c5.mockapi.io/products/${id}`,{method : 'DELETE'}) ; 

        try {
            const dataResult = await response.json();
            return dataResult 
            
        } catch (error) {
            return rejectWithValue(error)
        }

} );

export const updateApi = createAsyncThunk('updateApi', async (result, {rejectWithValue}) => {

    console.log(result);

    const response = await fetch(`https://641451f936020cecfda538c5.mockapi.io/products/${result.id}`,{
        method : 'PUT',
        headers : {
            'content-type' : "application/json",
        },
        body:JSON.stringify(result)
    }) ; 
        try {
            const dataResult = await response.json();
            return dataResult 
            
        } catch (error) {
            return rejectWithValue(error)
        }

} );


const apiSlice = createSlice({

    name:'api',
    initialState: {
        data : [],
        dataPerPage : 10,
        currentPage : 1,
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:{ 

        [createApi.pending] : (state) =>{
            state.loading = true;
       },
       [createApi.fulfilled] : (state,action) => {
           state.loading = false;
           console.log(action.payload);
           state.data.push(action.payload);
       },
       [createApi.rejected] : (state,action) =>{
           state.loading = false;
           state.error = action.payload.message
       },


        [readApi.pending] : (state) =>{
            state.loading = true;
       },
       [readApi.fulfilled] : (state,action) => {
           state.loading = false;
           state.data = action.payload ;
       },
       [readApi.rejected] : (state,action) =>{
           state.loading = false;
           state.error = action.payload
       },


        [deleteApi.pending]: (state) => {
            state.loading = true;
        },
        [deleteApi.fulfilled]: (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            state.data = state.data.filter((element) => element.id !== id)
        },
        [deleteApi.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },


        

        [updateApi.pending]: (state) => {
            state.loading = true;
        },
        [updateApi.fulfilled]: (state, action) => {
            state.loading = false;
            const { id } = action.payload;

            let index = state.data.findIndex(
                (item) => item.id === id
            )
            state.data[index].title = action.payload.title
            state.data[index].description = action.payload.description
            state.data[index].category = action.payload.category
            state.data[index].image = action.payload.image
            state.data[index].rate = action.payload.rate
            state.data[index].count = action.payload.count
            state.data[index].price = action.payload.price
        },
        [updateApi.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message
        },


    }

});

export const apiAction = apiSlice.actions;
export default apiSlice.reducer;