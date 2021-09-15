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

	const baseUrl = 'https://api.punkapi.com/v2/beers';

	return async (dispatch) => {
		try {
			const resp = await axios.get(`${baseUrl}/random`)
			dispatch(setRandomProduct(resp.data[0]));
		} catch (error) {
			console.log(error);
		}
	}
}