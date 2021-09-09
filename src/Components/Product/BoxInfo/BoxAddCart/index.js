import {useState} from 'react';
import {
	Flex,
	Text,
	Button,
	Icon,
	Box
} from '@chakra-ui/react';
import Counter from '../../../Common/Shop/Counter';
import {FiShoppingBag, FiShare2} from 'react-icons/fi';

const BoxAddCart = ({price = 2000}) => {
	const [counter, setCounter] = useState(1);

	return (  
		<Flex
		w='100%'
		my={{base:'20px', md: '10px'}}
		p='10px'
		flexFlow='row wrap'
		justifyContent='center'
		alignItems='center'
		boxShadow="md"
	>
		<Text fontSize='22px' fontWeight='extrabold' >$ {price} </Text>
		<Box mx='10px' my={{base: '20px', md: '0'}}>
			<Counter counter={counter} setCounter={setCounter} />
		</Box>
		<Button bg='white' borderRadius='full' w={0} mx='10px'>
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
		<Button bg='white' w={0} ml={{base:'0', md:'10px'}}>
			<Icon 
				as={FiShare2} 
				w='30px' 
				h='30px'
				p='2px' 
				color='#ccc ' 
				bg='white'
			/>
		</Button>
		</Flex>
	);
}

export default BoxAddCart;