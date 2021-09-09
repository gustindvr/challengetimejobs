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

export const fetchAllProducts = () => {
	
	return async (dispatch) => {
		try {
			const resp = await axios.get(process.env.REACT_APP_API);
			dispatch(setProductsList(resp.data));
		} catch (error) {
			console.log.log(error);
		}
	}

}