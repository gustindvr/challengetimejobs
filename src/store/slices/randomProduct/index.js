import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const randomSlice = createSlice({
	name: 'random',
	initialState: {
		randomProduct: {}
	},
	reducers: {
		setRandomProduct: (state, action) => {
			state.randomProduct = action.payload
		}
	}
})

export const {setRandomProduct} = randomSlice.actions;

export default randomSlice.reducer;

export const getRandomProduct = () => {
	return async (dispatch) => {
		try {
			const resp = await axios.get(`${process.env.REACT_APP_API}/random`)
			dispatch(setRandomProduct(resp.data[0]));
		} catch (error) {
			console.log(error);
		}
	}
}