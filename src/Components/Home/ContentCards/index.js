import {useEffect} from 'react';
import Card from "./Card";

/* Redux */
import { fetchAllProducts } from '../../../store/slices/products';
import { useDispatch, useSelector } from 'react-redux';

import {Flex} from '@chakra-ui/react';

const ContentCars = () => {

	const dispatch = useDispatch();

	const {list: products} = useSelector(state => state.products)

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, [dispatch]);
	
	return (  
		<Flex flexFlow='row wrap' w='100%'>
			{products.map(product => (
				<Card 
					id={product.id}
					tagline={product.tagline}
					image={product.image_url}
					title={product.name} 
					price='$2000' 
					boilVolume={product.boil_volume.value || 0} />
			))}
		</Flex>
	);
}
 
export default ContentCars;