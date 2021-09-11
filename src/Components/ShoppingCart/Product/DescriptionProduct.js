import {
	Flex,
	Text,
} from '@chakra-ui/react';

const DescriptionProduct = ({tagline, name, price, ebc}) => {
	return (  
		<Flex
			flexFlow='row wrap'
			w='min-content'
		>
			<Text w='100%' fontSize='10px'>{tagline}</Text>
			<Text w='100%' fontSize='28px'>{name}</Text>
			<Text w='100%' fontWeight='bold' fontSize='18'>$ {price}</Text>
			<Text w='100%' fontSize='10px' color='gray.400'>{ebc}</Text>
		</Flex>
	);
}
 
export default DescriptionProduct;