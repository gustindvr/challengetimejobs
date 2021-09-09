import {
	Flex,
	Text,
} from '@chakra-ui/react';

const DescriptionProduct = ({category, name, price, measure}) => {
	return (  
		<Flex
			flexFlow='row wrap'
			w='min-content'
		>
			<Text w='100%' fontSize='12px'>{category}</Text>
			<Text w='100%' fontSize='36px'>{name}</Text>
			<Text w='100%' fontWeight='bold' fontSize='18'>{price}</Text>
			<Text w='100%' fontSize='10px' color='gray.400'>{measure}</Text>
		</Flex>
	);
}
 
export default DescriptionProduct;