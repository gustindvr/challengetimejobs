import Title from '../Components/Common/Title';

import {
	Flex
} from '@chakra-ui/react';
import ProductList from '../Components/ShoppingCart';

const ShoppingCart = () => {
	return (  
		<Flex
			flexFlow='row wrap'
			mb={{base:'100px', md:'50px'}}
		>
			<Title first='Your' second='Shop' title='Cart' />
			<ProductList />
		</Flex>
	);
}
 
export default ShoppingCart;