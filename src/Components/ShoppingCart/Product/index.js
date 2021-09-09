import {useState, useEffect} from 'react';
import DescriptionProduct from './DescriptionProduct';
import Counter from '../../Common/Shop/Counter';

import {
	Flex,
	Box,
	Image,
} from '@chakra-ui/react';

const Product = ({price = 2000}) => {

	const [totalPrice, setTotalPrice] = useState(price)
	const [counter, setCounter] = useState(1);


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
			<Image src='' w='80px' h='120px' />
			<Box >
				<DescriptionProduct category='categoria y marca' name='nombre' price='$2000' measure='0.7' />
			</Box>
			<Box >
				<Counter counter={counter}  setCounter={setCounter}/>
			</Box>
			<Box >
				$ {totalPrice}
			</Box>
			<Box >
				Redondel
			</Box>
		</Flex>
	);
}
 
export default Product;