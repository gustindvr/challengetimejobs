import {useEffect, useState} from 'react';
import Card from "./Card";

/* Redux */
import { fetchAllProducts } from '../../../store/slices/products';
import { useDispatch, useSelector } from 'react-redux';

import {Flex, Button} from '@chakra-ui/react';

const ContentCars = () => {

	const [page, setPage] = useState(1);
	const [disabled, setDisabled] = useState(true);

	const dispatch = useDispatch();

	const {list: products} = useSelector(state => state.products);

	const forwardPage = () => {
		setPage(page + 1);
		setDisabled(false)
	}

	const backPage = () => {
		if(page <= 1 ){
			setPage(1);
			setDisabled(true);
		}else{
			setPage(page - 1)
		}
	}

	useEffect(() => {
		dispatch(fetchAllProducts(page));
		console.log(page)
	}, [dispatch, page]);
	
	return (  
		<>
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
			<Flex
				flexFlow='row wrap'
				justifyContent='space-around'
				textAlign='center'
			>
				<Button
					w={{base: '100%', md: '60%', lg:'30%' }}
					m='0' 
					bg='#9a193c' 
					_hover={{bg: ' #95072e'}}
					color='white'
				onClick={backPage} 
				mt='20px'
				disabled={disabled}
				>
					Previous Page
				</Button>
				<Button 
					w={{base: '100%', md: '60%', lg:'30%' }}
					m='0' 
					bg='#9a193c' 
					_hover={{bg: ' #95072e'}}
					color='white'
				onClick={forwardPage} 
				mt='20px'>
					Next Page
				</Button>
				</Flex>
		</>
	);
}
 
export default ContentCars;