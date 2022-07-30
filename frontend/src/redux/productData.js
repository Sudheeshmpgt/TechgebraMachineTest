import {createSlice} from '@reduxjs/toolkit';

export const productDataSlice = createSlice({
    name: 'productData',
    initialState: {value:[]},
    reducers: {
        productList : (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {productList} = productDataSlice.actions; 
export default productDataSlice.reducer; 