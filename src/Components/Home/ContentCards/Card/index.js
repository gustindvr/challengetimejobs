import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

/* Redux Toolkit*/
import {fetchOneProduct} from '../../../../store/slices/cart';

import {Flex, Text, Image, Button, Icon} from '@chakra-ui/react';
import {FiShoppingBag} from 'react-icons/fi';

import styles from '../../../../Styles/card.module.css';

const Card = ({id, tagline, image, title, price, boilVolume}) => {

	const [disabled, setdisabled] = useState(false);

	const dispatch = useDispatch();

	const clickHandler = (id) => {
		const idToString = String(id);
		dispatch(fetchOneProduct(idToString));
		setdisabled(true);
	}

	const history = useHistory();

	const goToProduct = (id) => {
		history.push(`/product/${id}`)
	}

	return (  
		<Flex 
			flexFlow='row wrap'
			border='1px solid #f0edee' 
			borderRadius='5px' 
			justifyContent='center' 
			textAlign='center' 
			mx='20px' 
			mb='20px'
			w={{base: '100%', md: '30%', 'lg':'25%'}}
			p='20px'
			className={styles.card}
			_hover={{
				boxShadow: '2xl',
			}}
			onClick={() => goToProduct(id)}
			>
			<Text w='100%' >{tagline}</Text>
			<Text w='100%' >{title}</Text>
			<Image src={image} w='50px' h='150px' />
			<Text w='100%'>{price}</Text>
			<Text w='100%'>{boilVolume}</Text>
			<Button 
				className={styles.buttonCard} 
				bg='white' 
				onClick={() => clickHandler(id)}
				disabled={disabled}
			>
			<Icon 
				as={FiShoppingBag} 
				w='50px' 
				h='50px'
				p='8px' 
				color='white ' 
				bg='#9a193c '
				borderRadius='full'
			/>
			</Button>
		</Flex>
	);
}
 
export default Card;