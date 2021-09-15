import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsSlices = createSlice({
	name: 'products',
	initialState: {
		list: []
	},
	reducers: {
		setProductsList: (state, action) => {
			state.list = action.payload;
		}
	}
})

export const {setProductsList} = productsSlices.actions;

export default productsSlices.reducer;

export const fetchAllProducts = (page) => {
	
	const baseUrl = 'https://api.punkapi.com/v2/beers';

	return async (dispatch) => {
		try {
			const resp = await axios.get(`${baseUrl}?page=${page}`);
			dispatch(setProductsList(resp.data));
		} catch (error) {
			console.log(error);
		}
	}

}