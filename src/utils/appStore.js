import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';

const appStore = configureStore({
    reducer: {
        // Add your slice reducers here
        cart: cartReducer,
    }
    
});
export default appStore;