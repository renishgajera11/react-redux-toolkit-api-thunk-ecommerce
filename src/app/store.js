import { configureStore } from '@reduxjs/toolkit';
import wishReducer from '../app/slice/WishListSlice';
import cartSlice from './slice/cartSlice';
import apiSlice from './slice/apiSlice';
import authSlice from './slice/authSlice';
import loginSlice from './slice/loginSlice';



export const store = configureStore({
  reducer: {
    wish: wishReducer,
    cart: cartSlice,
    api : apiSlice,
    register:authSlice,
    login:loginSlice
  },
  preloadedState:loadFromLocalStorage(),
});

function saveToLocalStorage(state){

  try{
    const serialState = JSON.stringify(state)
    localStorage.setItem("reduxStore",serialState)
  }catch(e){
    console.warn(e);
  }
}

function loadFromLocalStorage(){

  try{
    const serialisedState = localStorage.getItem("reduxStore");
    if(serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  }catch(e){
    console.warn(e);
    return undefined;
  }
}

store.subscribe(()=>saveToLocalStorage(store.getState()));
