import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const productSlice = createSlice({
	name:'product',
	initialState: {
		product:{}
	},
	reducers: {
		setProduct: (state, action) => {
			state.product = action.payload
		}
	}
})

export const {setProduct} = productSlice.actions;

export default productSlice.reducer;

export const getProduct = (id) => {
	return async (dispatch) => {
		try {
			const resp = await axios.get(`${process.env.REACT_APP_API}/${id}`)
			dispatch(setProduct(resp.data[0]))
		} catch (error) {
			console.log(error);
		}
	}
}