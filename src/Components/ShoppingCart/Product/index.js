import {useState, useEffect} from 'react';
import DescriptionProduct from './DescriptionProduct';
import Counter from '../../Common/Shop/Counter';

import {
	Flex,
	Box,
	Image,
} from '@chakra-ui/react';

const Product = ({productInCart}) => {

	const {tagline, name, ebc, image_url} = productInCart;

	/*API haven't this prop*/
	const price = 2000;

	/*States */
	const [totalPrice, setTotalPrice] = useState(price)
	const [counter, setCounter] = useState(1);
	
	/* Change price */
	useEffect(() => {
		setTotalPrice(price * counter);
	}, [counter, price])

	return (  
		<Flex
			w='100%'
			mx='100px'
			my={{base:'20px', md: '10px'}}
			p='20px'
			border='0.5px solid #f3f1f2 '
			flexFlow='row wrap'
			justifyContent={{base: 'center', md: 'space-around'}}
			alignItems='center'
		>
			{<Image src={image_url} w='5%' h='120px' />}
			<Box >
				{<DescriptionProduct category={tagline}name={name} price={price} ebc={ebc} />}
			</Box>
			<Box >
				<Counter counter={counter}  setCounter={setCounter}/>
			</Box>
			<Box >
				$ {totalPrice}
			</Box>
		</Flex>
	);
}
 
export default Product;