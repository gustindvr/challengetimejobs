
import{Box, Button, Text, Icon} from '@chakra-ui/react';
import {BsPlusCircle} from 'react-icons/bs';
import {BiMinusCircle} from 'react-icons/bi';

const Counter = ({counter, addProduct, sustractProduct}) => {

	return (  
		<Box 
			display='flex' 
			boxShadow="2xl" 
			px="6"
			py='1' 
			border='0.5px solid #ccc'
			rounded="2xl" 
			bg="white"
			alignItems='center'
		>
			<Button onClick={sustractProduct} bg='white' _hover={{bg:'white'}}>
				<Icon 
					as={BiMinusCircle} 
					color='#9a193c'
					_hover={{color: 'white', bg: '#95072e', borderRadius:'xl'}} 
				/>
			</Button>
			<Text>{counter}</Text>
			<Button onClick={addProduct} bg='white' _hover={{bg:'white'}}>
				<Icon 
					as={BsPlusCircle} 
					color='#9a193c' 
					_hover={{color: 'white', bg: '#95072e', borderRadius:'xl'}} 
				/>
			</Button>
		</Box>
	);
}
 
export default Counter;