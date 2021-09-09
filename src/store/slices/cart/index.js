import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const cartSlices = createSlice({
	name: 'cart',
	initialState:{
		list: []
	},
	reducers: {
		setCartList: (state, action) => {
			state.list = action.payload;
		}
	}
})

export const {setCartList} = cartSlices.actions;

export default cartSlices.reducer;

export const fetchOneProduct = (id) => {
	return async (dispatch, id) => {
		try {
			const resp = await axios.get(`${process.env.REACT_APP_API}/${id}`)
			dispatch(setCartList(resp.data));
		} catch (error) {
			console.log(error);
		}
	} 
}