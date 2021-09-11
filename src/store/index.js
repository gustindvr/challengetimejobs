import { configureStore } from '@reduxjs/toolkit';

/* Reducers*/
import products from './slices/products';
import cart from './slices/cart';
import product from './slices/product';
import randomProduct from './slices/randomProduct';

export default configureStore({
	reducer: {
		products,
		cart,
		product,
		randomProduct
	}
});