import {useEffect} from 'react';
import { useParams } from 'react-router';
import BoxInfo from '../Components/Product/BoxInfo';
import Descriptions from '../Components/Product/Descriptions';
import Card from '../Components/Home/ContentCards/Card';

/*Redux - toolkit */
import { getProduct } from '../store/slices/product';
import { getRandomProduct } from '../store/slices/randomProduct';
import { useDispatch, useSelector } from 'react-redux';

import {
	Flex,
	Box,
	Image
} from '@chakra-ui/react';

const Product = () => {

	const dispatch = useDispatch();
	
	const {product} = useSelector(state => state.product);

	const {randomProduct: random1} = useSelector(state => state.randomProduct)


	const params = useParams();
	const id = params.id;

	useEffect(() => {
		dispatch(getProduct(id))
		dispatch(getRandomProduct())
	}, [dispatch, id])

	return (  
		<Flex
			flexFlow='row wrap'
		>
			<Box>
				<BoxInfo 
					id={product.id}
					name={product.name}
					tagline={product.tagline}
					description={product.description}
					attenuation_level={product.attenuation_level}
				/>
			</Box>
			<Flex flexBasis={{base:'100%', md: '60%', lg:'40%'}} justifyContent='center' alignItems='center'>
				<Image src={product.image_url} w='200px' h='800px' />
			</Flex>
			<Box>
				<Descriptions />
			</Box>
				
			<Flex 
				flexFlow='row wrap'
			>
				<Card 
					id={random1.id}
					tagline={random1.tagline}
					image={random1.image_url}
					title={random1.name} 
					price='$2000' 
				/>
					<Card 
					id={random1.id}
					tagline={random1.tagline}
					image={random1.image_url}
					title={random1.name} 
					price='$2000' 
				/>
								<Card 
					id={random1.id}
					tagline={random1.tagline}
					image={random1.image_url}
					title={random1.name} 
					price='$2000' 
				/>
								<Card 
					id={random1.id}
					tagline={random1.tagline}
					image={random1.image_url}
					title={random1.name} 
					price='$2000' 
				/>
				
			</Flex>
		</Flex>
	);
}
 
export default Product;