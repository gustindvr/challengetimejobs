
import {Flex, Text, Image, Button, Icon} from '@chakra-ui/react';
import {FiShoppingBag} from 'react-icons/fi';

import styles from '../../../../Styles/card.module.css';

const Card = ({tagline, image, title, price, boilVolume}) => {
	return (  
		<Flex 
			flexFlow='row wrap'
			border='1px solid #f0edee' 
			borderRadius='5px' 
			justifyContent='center' 
			textAlign='center' 
			m='20px' 
			w={{base: '100%', md: '30%', lg: '20%'}}
			p='20px'
			className={styles.card}
			_hover={{
				boxShadow: '2xl',
			}}
			>
			<Text w='100%' >{tagline}</Text>
			<Text w='100%' >{title}</Text>
			<Image src={image} w='50px' h='150px' />
			<Text w='100%'>{price}</Text>
			<Text w='100%'>{boilVolume}</Text>
			<Button className={styles.buttonCard} bg='white'>
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