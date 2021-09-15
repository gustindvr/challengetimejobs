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

	const baseUrl = 'https://api.punkapi.com/v2/beers';

	return async (dispatch) => {
		try {
			const resp = await axios.get(`${baseUrl}/${id}`)
			dispatch(setProduct(resp.data[0]))
		} catch (error) {
			console.log(error);
		}
	}
}