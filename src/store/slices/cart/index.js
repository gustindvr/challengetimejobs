import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const cartSlices = createSlice({
	name: 'cart',
	initialState:{
		list: [],
	},
	reducers: {
		setCartList: (state, action) => {
			state.list = [...state.list, action.payload]
		}
	}
})

export const {setCartList} = cartSlices.actions;

export default cartSlices.reducer;

export const fetchOneProduct = (productId) => {
	return async (dispatch, id) => {
		try {
			const resp = await axios.get(`${process.env.REACT_APP_API}/${productId}`);
			dispatch(setCartList(resp.data[0]));
		} catch (error) {
			console.log(error);
		}
	} 
}