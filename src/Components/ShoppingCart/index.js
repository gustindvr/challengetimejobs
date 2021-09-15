
import {useSelector} from 'react-redux';

import Product from "./Product";

const ProductList = () => {

	const cart = useSelector(state => state.cart.list);

	return (  
		<>
		{cart.map(productInCart => 
			<Product 
				productInCart={productInCart} 
				key={productInCart.id} 
			/>	
		)}
		</>
	);
}
 
export default ProductList;