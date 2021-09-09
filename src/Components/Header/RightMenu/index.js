import {useHistory} from 'react-router-dom';
import {
	Button, 
	Box, 
	Icon, 
	Flex,
} from '@chakra-ui/react';
import {FiShoppingBag} from 'react-icons/fi';

const RightMenu = () => {
	const history = useHistory()

	/*Redirect to shopping cart */
	const goToShoppingCart = () => {
		history.push('/shopping-cart')
	}



	return (  
		<Flex flexFlow='row wrap' justifyContent={{base:'center', md:'space-between'}} >
			<Box 
				as='button' 
				bg='#9a193c ' 
				_hover={{bg: ' #95072e'}}
				color=' white' 
				p='5px'
				borderRadius='2px'
				mr='10px'
				my={{base:'10px', md: '0'}}
			>
				Registrarse o Iniciar Sesión
			</Box>
			<Button 
				border='1px solid #9a193c' 
				borderRadius='none' 
				my={{base:'10px', md: '0'}}
				onClick={goToShoppingCart}
				>
					<Icon 
						as={FiShoppingBag} 
						w={6} 
						h={8} 
						m='10px' 
						color='#9a193c ' 
					/>
			</Button>
		</Flex>
	);
}
 
export default RightMenu;