import { configureStore } from '@reduxjs/toolkit';

/* Reducers*/
import products from './slices/products';
import cart from './slices/cart';

export default configureStore({
	reducer: {
		products,
		cart
	}
});