import {Box, Text, Image} from '@chakra-ui/react';

const Card = () => {
	return (  
		<Box border='1px solid #ccc' borderRadius='5px' justifyContent='center' textAlign='center' m='20px' >
			<Text w='100%' >preTitle</Text>
			<Text w='100%' >Title</Text>
			<Image src='' />
			<Text>Price</Text>
			<Text> x lts</Text>

		</Box>
	);
}
 
export default Card;